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
exports.TesterSchema = exports.Tester = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let Tester = class Tester extends mongoose_1.Document {
};
__decorate([
    (0, mongoose_2.Prop)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Tester.prototype, "isActive", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: 'string' }),
    __metadata("design:type", String)
], Tester.prototype, "username", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: 'string', unique: true, required: true }),
    __metadata("design:type", String)
], Tester.prototype, "email", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: 'string' }),
    __metadata("design:type", String)
], Tester.prototype, "name", void 0);
__decorate([
    (0, mongoose_2.Prop)({ type: 'string', default: new Date().toISOString() }),
    __metadata("design:type", String)
], Tester.prototype, "created_at", void 0);
Tester = __decorate([
    (0, mongoose_2.Schema)()
], Tester);
exports.Tester = Tester;
exports.TesterSchema = mongoose_2.SchemaFactory.createForClass(Tester);
//# sourceMappingURL=tester.entity.js.map