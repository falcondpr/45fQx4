"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const chat_gateway_1 = require("./chat.gateway");
const message_service_1 = require("../message/message.service");
const message_entity_1 = require("../message/entities/message.entity");
const team_entity_1 = require("../team/entities/team.entity");
let ChatModule = class ChatModule {
};
ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: message_entity_1.Message.name, schema: message_entity_1.MessageSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: team_entity_1.Team.name, schema: team_entity_1.TeamSchema }]),
        ],
        providers: [chat_gateway_1.ChatGateway, message_service_1.MessageService],
    })
], ChatModule);
exports.ChatModule = ChatModule;
//# sourceMappingURL=chat.module.js.map