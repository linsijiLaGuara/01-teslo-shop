import { Injectable, BadRequestException } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {

    getStatictProducImage(imageName:string){
        //veriofica que el archivo exista
        const path = join(__dirname,'../../static/products', imageName);
        if (!existsSync(path))
        throw new BadRequestException(`No existe ${imageName}` );
        
        return path;
    }
}
