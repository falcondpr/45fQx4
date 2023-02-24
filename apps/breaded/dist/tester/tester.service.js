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
exports.TesterService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const tester_entity_1 = require("./entities/tester.entity");
let TesterService = class TesterService {
    constructor(testerModel) {
        this.testerModel = testerModel;
    }
    async create(dto) {
        try {
            const tester = await this.testerModel.create(dto);
            return tester;
        }
        catch (error) {
            console.log(error);
            this.handleException(error);
        }
    }
    findAll() {
        return this.testerModel.find();
    }
    async findOne(id) {
        try {
            const tester = await this.testerModel.findById(id);
            return tester;
        }
        catch (error) {
            console.log(error);
            this.handleException(error);
        }
    }
    async update(id, dto) {
        const tester = await this.findOne(id);
        try {
            await tester.updateOne(dto);
            return Object.assign(Object.assign({}, tester.toJSON()), dto);
        }
        catch (error) {
            console.log(error);
            this.handleException(error);
        }
    }
    async remove(id) {
        const { deletedCount } = await this.testerModel.deleteOne({ _id: id });
        if (deletedCount === 0)
            throw new common_1.BadRequestException(`Tester with id ${id} not exists`);
        return `Tester with id ${id} deteled!`;
    }
    handleException(error) {
        if (error.code === 11000) {
            throw new common_1.BadRequestException(`Tester exists in db ${JSON.stringify(error.keyValue)}`);
        }
        console.log(error);
        throw new common_1.InternalServerErrorException(`Can't create Tester - Check server logs`);
    }
};
TesterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(tester_entity_1.Tester.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TesterService);
exports.TesterService = TesterService;
//# sourceMappingURL=tester.service.js.map