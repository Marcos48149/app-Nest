/// <reference types="multer" />
import { FileRepository } from './file-upload.repository';
import { Products } from 'src/entities/product.entity';
import { Repository } from 'typeorm';
export declare class FileUploadService {
    private readonly fileRepository;
    private readonly productRepository;
    constructor(fileRepository: FileRepository, productRepository: Repository<Products>);
    updateImage(file: Express.Multer.File, productId: string): Promise<{
        message: string;
        Image: Products;
    }>;
}
