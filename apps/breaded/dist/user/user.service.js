"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const argon = require("argon2");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async signInToken(id, email, fullname) {
        const payload = { id, email, fullname };
        const config = {
            secret: process.env.SECRET_KEY,
            expiresIn: process.env.EXPIRES_IN_KEY,
        };
        return this.jwtService.signAsync(payload, config);
    }
    async register(dto) {
        const passwordHash = await argon.hash(dto.password);
        const foundUser = await this.userModel.findOne({ email: dto.email });
        if (foundUser)
            throw new common_1.ForbiddenException(`Email ${foundUser.email} is already in use`);
        if (foundUser.username === dto.username) {
            throw new common_1.ForbiddenException(`Username ${foundUser.username} is already in use`);
        }
        try {
            const user = await this.userModel.create(Object.assign(Object.assign({}, dto), { password: passwordHash, is_verified: {
                    is_valid: 'BASIC',
                    updated_at: new Date().toISOString(),
                }, is_premium: {
                    is_valid: false,
                    updated_at: new Date().toISOString(),
                }, created_at: new Date().toISOString() }));
            return this.signInToken(user._id, user.email, user.fullname);
        }
        catch (error) {
            this.handleException(error);
        }
    }
    async login(dto) {
        let currentUser;
        currentUser = await this.userModel.findOne({ email: dto.email });
        if (!currentUser) {
            currentUser = await this.userModel.findOne({ username: dto.email });
        }
        if (!currentUser)
            throw new common_1.NotFoundException(`Username ${currentUser.username} does not exist`);
        const pwMatches = await argon.verify(currentUser.password, dto.password);
        if (!pwMatches)
            throw new common_1.ForbiddenException(`The credentials are not correct`);
        try {
            return this.signInToken(currentUser._id, currentUser.email, currentUser.fullname);
        }
        catch (error) {
            this.handleException(error);
        }
    }
    findAll() {
        return this.userModel.find();
    }
    async findOne(term) {
        let user;
        try {
            if ((0, mongoose_1.isValidObjectId)(term)) {
                user = await this.userModel.findById(term);
            }
            if (!user) {
                user = await this.userModel.findOne({ email: term });
            }
            if (!user) {
                user = await this.userModel.findOne({ username: term });
            }
            return user;
        }
        catch (error) {
            this.handleException(error);
        }
    }
    async update(term, dto) {
        const currentUser = dto;
        const user = await this.findOne(term);
        if (!user)
            throw new common_1.NotFoundException(`User with id ${term} not found`);
        if (dto.password)
            currentUser.password = await argon.hash(currentUser.password);
        if (user.username === dto.username) {
            throw new common_1.ForbiddenException(`Username ${user.username} is already in use`);
        }
        if (user.email === dto.email) {
            throw new common_1.ForbiddenException(`Email ${user.email} is already in use`);
        }
        try {
            return this.userModel.findByIdAndUpdate(term, currentUser, {
                new: true,
            });
        }
        catch (error) {
            this.handleException(error);
        }
    }
    async remove(id) {
        const { deletedCount } = await this.userModel.deleteOne({ _id: id });
        if (deletedCount === 0)
            throw new common_1.NotFoundException(`User with id ${id} does not exist`);
        return `User with id ${id} deleted!`;
    }
    handleException(error) {
        if (error.code === 11000) {
            throw new common_1.BadRequestException(`User exists in db ${JSON.stringify(error.keyvalue)}`);
        }
        console.log(error);
        throw new common_1.InternalServerErrorException(`Can't create User - Check server logs`);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map