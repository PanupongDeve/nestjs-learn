import { Controller, Get, Post,Req, Res, HttpCode, Redirect, Query, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { UtilsHelpers } from '../helpers/UtilsHelpers';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
     private catsService: CatsService;
     
    
      constructor(private readonly utilsHelpers: UtilsHelpers) {
          this.catsService = new CatsService();
      }

      @Post()
      async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
      }
    
      @Get()
      async findAll(): Promise<Cat[]> {
          console.log(this.utilsHelpers.getHelloWorld());
        return this.catsService.findAll();
      }
}
