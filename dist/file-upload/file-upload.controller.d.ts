/// <reference types="multer" />
import { FileUploadService } from './file-upload.service';
export declare class FileUploadController {
    private readonly fileService;
    constructor(fileService: FileUploadService);
    updateImage(productId: string, file: Express.Multer.File): Promise<{
        message: string;
        Image: import("../entities/product.entity").Products;
    }>;
}
