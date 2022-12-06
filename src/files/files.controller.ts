import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, BadGatewayException, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FilesService } from './files.service';
import { fileFilter, fileNamer } from './helpers';


@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}



  @Post('product')
  @UseInterceptors(FileInterceptor('file',{
    fileFilter: fileFilter,
    storage: diskStorage ({
      destination : './static/products',
      filename : fileNamer
    })
  }))
  uploasdProductImage(
    @UploadedFile() file: Express.Multer.File){

if (!file){
  throw new BadRequestException('Erro en la imagen')
}

    return {
      fiileName: file.originalname};
  }
}
