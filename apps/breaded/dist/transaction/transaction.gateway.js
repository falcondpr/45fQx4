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
exports.TransactionGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const update_ticket_dto_1 = require("../ticket/dto/update-ticket.dto");
const ticket_service_1 = require("../ticket/ticket.service");
let TransactionGateway = class TransactionGateway {
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    update(dto) {
        const ticket = this.ticketService.update(dto._id, dto);
        this.server.emit('ticket', ticket);
        return ticket;
    }
    findAll(id) {
        return this.ticketService.findOne(id);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], TransactionGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('updateTransaction'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_ticket_dto_1.UpdateTicketDto]),
    __metadata("design:returntype", void 0)
], TransactionGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findAllTransaction'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TransactionGateway.prototype, "findAll", null);
TransactionGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    }),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TransactionGateway);
exports.TransactionGateway = TransactionGateway;
//# sourceMappingURL=transaction.gateway.js.map