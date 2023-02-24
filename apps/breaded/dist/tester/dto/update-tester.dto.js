"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTesterDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tester_dto_1 = require("./create-tester.dto");
class UpdateTesterDto extends (0, mapped_types_1.PartialType)(create_tester_dto_1.CreateTesterDto) {
}
exports.UpdateTesterDto = UpdateTesterDto;
//# sourceMappingURL=update-tester.dto.js.map