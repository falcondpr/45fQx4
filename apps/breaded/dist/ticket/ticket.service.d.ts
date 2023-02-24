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
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateTicketDto, UpdateTicketDto } from './dto';
import { Ticket } from './entities/ticket.entity';
export declare class TicketService {
    private readonly ticketModel;
    constructor(ticketModel: Model<Ticket>);
    create(dto: CreateTicketDto): Promise<Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(Ticket & {
        _id: import("mongoose").Types.ObjectId;
    })[], Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Ticket>;
    findOne(id: string): import("mongoose").Query<Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }, Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Ticket>;
    update(id: string, dto: UpdateTicketDto): Promise<Ticket & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<string>;
    private handleException;
}
