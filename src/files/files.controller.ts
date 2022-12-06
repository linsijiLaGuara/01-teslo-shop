import { Controller, Get, Post, UploadedFile, UseInterceptors, BadGatewayException, BadRequestException, Param, Patch, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FilesService } from './files.service';
import { fileFilter, fileNamer } from './helpers';


@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

   @Get('product/:imageName')
   findProductImage(

    @Param('imageName')imageName: string
   ){ const path = this.filesService.getStatictProducImage(imageName)
 return path;

   }

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
const secureUrl = `${file.filename}`;
    return {secureUrl};
  }
}
