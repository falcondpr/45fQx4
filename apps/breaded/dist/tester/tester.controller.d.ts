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
import { TesterService } from './tester.service';
import { CreateTesterDto, UpdateTesterDto } from './dto';
export declare class TesterController {
    private readonly testerService;
    constructor(testerService: TesterService);
    create(dto: CreateTesterDto): Promise<import("./entities/tester.entity").Tester & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("./entities/tester.entity").Tester & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("./entities/tester.entity").Tester & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/tester.entity").Tester>;
    findOne(id: string): Promise<import("./entities/tester.entity").Tester & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, dto: UpdateTesterDto): Promise<{
        name?: string;
        username?: string;
        email?: string;
    }>;
    remove(id: string): Promise<string>;
}
