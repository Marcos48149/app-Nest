import { BadRequestException, Controller, FileTypeValidator, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from './file-upload.service';
import { AuthGuard } from 'src/auth/authGuard/guard';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/roles/roles';
import { RoleEnum } from 'src/roles/roles.enum';
import { RolesGuard } from 'src/auth/authGuard/roles.guards';

@ApiTags('FILES')
@Controller('files')
export class FileUploadController {
constructor( private readonly fileService: FileUploadService){}
   
    @Post('uploadImage/:id')
    @Roles(RoleEnum.Admin)
    @UseGuards(AuthGuard,RolesGuard)
    @UseInterceptors(FileInterceptor('file'))
    async updateImage(@Param('id') productId: string, @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 204800,
            message: 'La imagen supera el maximo de KB'
          }),
          new FileTypeValidator({ fileType: /(jpeg|jpg|png|svg|gif)/ }),
        ],
      }),
    )
    file: Express.Multer.File) {
      if (!file) throw new BadRequestException('No se proporcionó ningún archivo')
  
      return this.fileService.updateImage(file, productId)
    }
  }
  


