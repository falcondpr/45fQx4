"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesterModule = void 0;
const common_1 = require("@nestjs/common");
const tester_service_1 = require("./tester.service");
const tester_controller_1 = require("./tester.controller");
const mongoose_1 = require("@nestjs/mongoose");
const tester_entity_1 = require("./entities/tester.entity");
let TesterModule = class TesterModule {
};
TesterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: tester_entity_1.Tester.name, schema: tester_entity_1.TesterSchema }]),
        ],
        controllers: [tester_controller_1.TesterController],
        providers: [tester_service_1.TesterService],
    })
], TesterModule);
exports.TesterModule = TesterModule;
//# sourceMappingURL=tester.module.js.map