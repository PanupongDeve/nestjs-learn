import { Controller, Get, Post,Req, Res, HttpCode, Redirect, Query, Body, HttpException, HttpStatus, UseFilters, UsePipes } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { UtilsHelpers } from '../helpers/UtilsHelpers';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from '../HttpExceptions/ForbiddenException';
import { HttpExceptionFilter } from '../HttpExceptions/http-exception.filter';
import { ValidationPipe } from '../common/pipes/validation.pipe';
@Controller('cats')
export class CatsController {
      constructor(
        private readonly utilsHelpers: UtilsHelpers,
        private readonly catsService: CatsService
        ) {
          
      }

      @Post()
      // @UsePipes(ValidationPipe)
      async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
      }
    
      @Get()
      @UseFilters(HttpExceptionFilter)
      async findAll(@Query('version') version): Promise<Cat[]> {
        if (version && version === '5') {
          throw new ForbiddenException('Forbidden');
        }
        
        console.log(this.utilsHelpers.getHelloWorld());
        return this.catsService.findAll();
      }
}
