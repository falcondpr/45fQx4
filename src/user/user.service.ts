import * as argon from 'argon2';
import { Model } from 'mongoose';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';
import { User, UserDocument } from './entities/user.entity';
import {
  ITokenDTO,
  IUserPremium,
  IUserVerified,
} from '../interfaces';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async singInToken(params: ITokenDTO): Promise<string> {
    const payload = {
      ...params,
    };

    const secret = process.env.SECRET_KEY;
    return this.jwtService.signAsync(payload, { expiresIn: '72h', secret });
  }

  async register(dto: CreateUserDto): Promise<{ token: string }> {
    const hash = await argon.hash(dto.password);

    const foundUserByEmail = await this.userModel.findOne({
      email: dto.email,
    });
    const foundUserByUsername = await this.userModel.findOne({
      username: dto.username,
    });

    if (foundUserByEmail || foundUserByUsername)
      throw new ForbiddenException('El usuario ya existe');

    try {
      const userCreated = await this.userModel.create({
        ...dto,
        password: hash,
      });
      const params = {
        id: userCreated._id,
        email: userCreated.email,
        fullname: userCreated.fullname,
      };

      const token = await this.singInToken(params);
      return { token };
    } catch (error) {
      console.log(error);
    }
  }

  async login(dto: LoginUserDto): Promise<any> {
    try {
      const foundUserByEmail: User = await this.userModel.findOne({
        email: dto.email_or_username,
      });

      const foundUserByUsername: User = await this.userModel.findOne({
        username: dto.email_or_username,
      });

      const userLogged: User = foundUserByEmail || foundUserByUsername;
      if (!userLogged) return new NotFoundException('Usuario no encontrado');

      const pwIsOk = await argon.verify(userLogged.password, dto.password);
      if (!pwIsOk) return new NotFoundException('Credential no valids');

      const params = {
        id: userLogged._id,
        email: userLogged.email,
        fullname: userLogged.fullname,
      };

      const token = await this.singInToken(params);
      return { token };
    } catch (error) {
      console.log(error);
    }
  }

  findAll(): Promise<UserDocument[]> {
    return this.userModel.find();
  }

  async findUserByPremium(param: string, value: string): Promise<IUserPremium> {
    const user: User = await this.userModel.findOne({ [param]: value });
    return {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      isPremium: user.isPremium,
    };
  }

  async findUserByVerified(
    param: string,
    value: string,
  ): Promise<IUserVerified> {
    const user: User = await this.userModel.findOne({ [param]: value });
    return {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      isVerified: user.isPremium,
    };
  }

  findOne(param: string, value: string): Promise<UserDocument> {
    return this.userModel.findOne({ [param]: value });
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserDocument> {
    let pwHash: string;
    try {
      if (dto.password) {
        pwHash = await argon.hash(dto.password);
      }

      return this.userModel.findByIdAndUpdate(
        id,
        { ...dto, updatedAt: new Date().toISOString(), password: pwHash },
        { new: true },
      );
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: string): Promise<UserDocument> {
    return this.userModel.findByIdAndDelete(id);
  }
}
