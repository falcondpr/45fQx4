/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Server } from 'socket.io';
import { UpdateTicketDto } from '../ticket/dto/update-ticket.dto';
import { TicketService } from '../ticket/ticket.service';
export declare class TransactionGateway {
    private readonly ticketService;
    server: Server;
    constructor(ticketService: TicketService);
    update(dto: UpdateTicketDto): Promise<import("../ticket/entities/ticket.entity").Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(id: string): import("mongoose").Query<import("../ticket/entities/ticket.entity").Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }, import("../ticket/entities/ticket.entity").Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../ticket/entities/ticket.entity").Ticket>;
}
