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
import { CreateMessageDto, UpdateMessageDto } from './dto';
import { Message } from './entities/message.entity';
export declare class MessageService {
    private readonly messageModel;
    constructor(messageModel: Model<Message>);
    create(dto: CreateMessageDto): Promise<Message & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(id_team: string): import("mongoose").Query<(Message & {
        _id: import("mongoose").Types.ObjectId;
    })[], Message & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Message>;
    findOne(id: string): Promise<Message & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, dto: UpdateMessageDto): Promise<{
        id_team?: string;
        id_user_transmitter?: string;
        id_user_receiver?: string;
        content?: string;
    }>;
    remove(id: string): Promise<string>;
    private handleException;
}
