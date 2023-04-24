import * as argon from 'argon2';
import { ObjectId as ObjectID } from 'mongodb';
import { ObjectId, Repository } from 'typeorm';
import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import { RegisterUserDto, UpdateUserDto } from './dto';
import { User } from './entities/user.entity';
import { ITokenDTO } from './interfaces/user.interface';
import { LoginUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signInToken(params: ITokenDTO): Promise<string> {
    const payload = { ...params };
    const secret = process.env.AUTH_SECRET_KEY;
    return this.jwtService.signAsync(payload, {
      expiresIn: process.env.AUTH_EXPIRES_IN,
      secret,
    });
  }

  async register(dto: RegisterUserDto): Promise<{ token: string }> {
    const { password, username, email } = dto;

    const hash = await argon.hash(password);
    const foundUserByEmail = await this.userRepo.findOneBy({ email });
    const foundUserByUsername = await this.userRepo.findOneBy({ username });

    if (foundUserByUsername || foundUserByEmail)
      throw new ForbiddenException('El usuario ya existe');

    const paramsUserToCreate = { ...dto, password: hash };

    try {
      const userCreated = await this.userRepo.save(paramsUserToCreate);
      const paramsToCreateToken: any = {
        id: userCreated._id,
        email: userCreated.email,
        fullname: userCreated.fullname,
      };

      const token = await this.signInToken(paramsToCreateToken);
      return { token };
    } catch (error) {
      console.log(error);
    }
  }

  async login(dto: LoginUserDTO): Promise<any> {
    const { emailOrUsername: eou } = dto;

    const foundUserByEmail = await this.userRepo.findOneBy({ email: eou });
    const foundUserByUsername = await this.userRepo.findOneBy({
      username: eou,
    });

    const userLogged: User = foundUserByEmail || foundUserByUsername;
    if (!userLogged) return new NotFoundException('Usuario no encontrado');

    try {
      const paramsToCreateToken: any = {
        id: userLogged._id,
        email: userLogged.email,
        fullname: userLogged.fullname,
      };
      const token = await this.signInToken(paramsToCreateToken);
      return { token };
    } catch (error) {
      console.log(error);
    }
  }

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  async findOneBy(value: ObjectId | string, param: string): Promise<User> {
    if (ObjectID.isValid(value) && param === 'id') {
      return this.userRepo.findOneByOrFail({ _id: new ObjectID(value) });
    }

    return this.userRepo.findOneByOrFail({ [param]: value });
  }

  async update(id: ObjectId, dto: UpdateUserDto): Promise<User> {
    const user = await this.findOneBy(id, 'id');
    const updatedDTO = {
      ...dto,
      updatedAt: new Date().toISOString(),
    };
    this.userRepo.merge(user, updatedDTO);
    return this.userRepo.save(user);
  }

  remove(id: ObjectId) {
    return this.userRepo.delete(id);
  }
}
