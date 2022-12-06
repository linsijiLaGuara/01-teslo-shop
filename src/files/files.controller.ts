import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, BadGatewayException, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { fileFilter } from './helpers/filesFilter.helpers';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}



  @Post('product')
  @UseInterceptors(FileInterceptor('file',{
    fileFilter: fileFilter 
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
