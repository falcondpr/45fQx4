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
import { CreateTeamDto } from './dto';
import { Team } from './entities/team.entity';
export declare class TeamService {
    private readonly teamModel;
    constructor(teamModel: Model<Team>);
    create(dto: CreateTeamDto): Promise<Team & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(Team & {
        _id: import("mongoose").Types.ObjectId;
    })[], Team & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Team>;
    existsTeam(id_users: string): Promise<Team & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getTeamByUser(id: string): Promise<(Team & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    remove(id: string): Promise<string>;
    private handleException;
}
