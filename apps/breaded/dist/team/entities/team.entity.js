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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamSchema = exports.Team = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let Team = class Team extends mongoose_1.Document {
};
__decorate([
    (0, mongoose_2.Prop)({ type: Array, of: String, required: true }),
    __metadata("design:type", Array)
], Team.prototype, "members", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: String }),
    __metadata("design:type", String)
], Team.prototype, "created_at", void 0);
Team = __decorate([
    (0, mongoose_2.Schema)()
], Team);
exports.Team = Team;
exports.TeamSchema = mongoose_2.SchemaFactory.createForClass(Team);
//# sourceMappingURL=team.entity.js.map