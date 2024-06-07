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
exports.OrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class OrderDto {
}
exports.OrderDto = OrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Esto es el Id de usuario  ',
        example: "29e93be6-d2b9-43e0-849e-6cba42a9cf90"
    }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OrderDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Esto es una orden ',
        example: [
            {
                "id": "4c5ec3fe-202d-4e4c-b1a2-4329903bb21e"
            },
            {
                "id": "096413b4-2f9d-4ced-ab66-3b57350f9219"
            }
        ]
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.IsObject)({ each: true }),
    __metadata("design:type", Array)
], OrderDto.prototype, "product", void 0);
//# sourceMappingURL=orderDTO.js.map