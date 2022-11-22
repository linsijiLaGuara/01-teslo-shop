import { Module } from '@nestjs/common';
import { PaginationDto } from './dto/pagination.dto';

@Module({
    imports:[PaginationDto]
})
export class CommonModule {}
