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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const file_upload_service_1 = require("./file-upload.service");
const guard_1 = require("../auth/authGuard/guard");
const swagger_1 = require("@nestjs/swagger");
const roles_1 = require("../roles/roles");
const roles_enum_1 = require("../roles/roles.enum");
const roles_guards_1 = require("../auth/authGuard/roles.guards");
let FileUploadController = class FileUploadController {
    constructor(fileService) {
        this.fileService = fileService;
    }
    async updateImage(productId, file) {
        if (!file)
            throw new common_1.BadRequestException('No se proporcionó ningún archivo');
        return this.fileService.updateImage(file, productId);
    }
};
exports.FileUploadController = FileUploadController;
__decorate([
    (0, common_1.Post)('uploadImage/:id'),
    (0, roles_1.Roles)(roles_enum_1.RoleEnum.Admin),
    (0, common_1.UseGuards)(guard_1.AuthGuard, roles_guards_1.RolesGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({
                maxSize: 204800,
                message: 'La imagen supera el maximo de KB'
            }),
            new common_1.FileTypeValidator({ fileType: /(jpeg|jpg|png|svg|gif)/ }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FileUploadController.prototype, "updateImage", null);
exports.FileUploadController = FileUploadController = __decorate([
    (0, swagger_1.ApiTags)('FILES'),
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [file_upload_service_1.FileUploadService])
], FileUploadController);
//# sourceMappingURL=file-upload.controller.js.map