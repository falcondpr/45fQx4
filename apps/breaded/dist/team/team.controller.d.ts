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
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    create(createTeamDto: CreateTeamDto): Promise<import("./entities/team.entity").Team & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("./entities/team.entity").Team & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("./entities/team.entity").Team & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/team.entity").Team>;
    findOne(id: string): Promise<(import("./entities/team.entity").Team & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    existTeam(id_users: string): Promise<import("./entities/team.entity").Team & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getTeamsByUser(id: string): Promise<(import("./entities/team.entity").Team & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    remove(id: string): Promise<string>;
}
