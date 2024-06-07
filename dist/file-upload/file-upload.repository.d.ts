/// <reference types="multer" />
import { UploadApiResponse } from "cloudinary";
export declare class FileRepository {
    updateImage(file: Express.Multer.File): Promise<UploadApiResponse>;
}
