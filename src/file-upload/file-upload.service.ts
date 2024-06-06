import { Injectable, NotFoundException } from '@nestjs/common';
import { FileRepository } from './file-upload.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileUploadService {
constructor(private readonly fileRepository: FileRepository,
    @InjectRepository(Products)
        private readonly productRepository: Repository<Products>
){}

async updateImage(file: Express.Multer.File, productId: string) {

    const product = await this.productRepository.findOneBy({ id: productId })
    if (!product) { throw new NotFoundException(`PRODUCTO CON id: ${productId} NO ENCONTRADO`) }

    const response = await this.fileRepository.updateImage(file)

    const updateProduct = await this.productRepository.update(productId, { imgUrl: response.secure_url })
    const newImage = await this.productRepository.findOneBy({ id: productId });
    return  {message: `Se agrego la imagen`,
    Image: newImage}
        
    ;
}
}
