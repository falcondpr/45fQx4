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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const custom_schema_1 = require("./custom.schema");
let User = class User extends mongoose_1.Document {
};
__decorate([
    (0, mongoose_2.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], User.prototype, "fullname", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: custom_schema_1.AVATAR_SCHEMA, _id: false }),
    __metadata("design:type", Object)
], User.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: custom_schema_1.BANNER_SCHEMA, _id: false }),
    __metadata("design:type", Object)
], User.prototype, "banner", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: custom_schema_1.IS_VERIFIED_SCHEMA, _id: false }),
    __metadata("design:type", Object)
], User.prototype, "is_verified", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: custom_schema_1.IS_PREMIUM_SCHEMA, _id: false }),
    __metadata("design:type", Object)
], User.prototype, "is_premium", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: String }),
    __metadata("design:type", String)
], User.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: String }),
    __metadata("design:type", String)
], User.prototype, "updated_at", void 0);
User = __decorate([
    (0, mongoose_2.Schema)()
], User);
exports.User = User;
exports.UserSchema = mongoose_2.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.entity.js.map