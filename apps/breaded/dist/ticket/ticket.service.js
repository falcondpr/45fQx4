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
exports.TicketService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const ticket_entity_1 = require("./entities/ticket.entity");
let TicketService = class TicketService {
    constructor(ticketModel) {
        this.ticketModel = ticketModel;
    }
    async create(dto) {
        try {
            const ticket = await this.ticketModel.create(Object.assign(Object.assign({}, dto), { created_at: new Date().toISOString() }));
            return ticket;
        }
        catch (error) {
            this.handleException(error);
        }
    }
    findAll() {
        return this.ticketModel.find();
    }
    findOne(id) {
        return this.ticketModel.findById(id);
    }
    async update(id, dto) {
        try {
            const ticketUpdated = await this.ticketModel.findByIdAndUpdate(id, Object.assign(Object.assign({}, dto), { updated_at: new Date().toISOString() }), { new: true });
            return ticketUpdated;
        }
        catch (error) {
            this.handleException(error);
        }
    }
    async remove(id) {
        try {
            const { deletedCount } = await this.ticketModel.deleteOne({ _id: id });
            if (deletedCount === 0)
                throw new common_1.NotFoundException(`Ticket with id ${id} does not exist`);
            return `Ticket with id ${id} deleted!`;
        }
        catch (error) {
            this.handleException(error);
        }
    }
    handleException(error) {
        if (error.code === 11000) {
            throw new common_1.BadRequestException(`Ticket exists in db ${JSON.stringify(error.keyvalue)}`);
        }
        console.log(error);
        throw new common_1.InternalServerErrorException(`Can't create User - Check server logs`);
    }
};
TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(ticket_entity_1.Ticket.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map