import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';

@Injectable()
export class ProductsService {

constructor(
  @InjectRepository(Product)
  private readonly producRespository: Repository<Product>,

){}


  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.producRespository.create(createProductDto);
      await this.producRespository.save(product);
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('ayuda!')
      
      
    }
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
