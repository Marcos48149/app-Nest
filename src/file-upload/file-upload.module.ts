import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from 'src/entities/product.entity';
import { cloudinaryConfig } from 'src/config/cloudinaryConfig';
import { FileRepository } from './file-upload.repository';

@Module({
  imports:[TypeOrmModule.forFeature([Products])],
  providers: [FileUploadService, cloudinaryConfig,FileRepository],
  controllers: [FileUploadController]
})
export class FileUploadModule {}
