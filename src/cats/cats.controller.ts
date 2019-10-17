import { 
  Controller, 
  Get, 
  Post,
  Req, 
  Res, 
  HttpCode, 
  Redirect, 
  Query, Body, 
  HttpException, 
  HttpStatus, 
  UseFilters, 
  UsePipes, 
  UseGuards,
  SetMetadata,
  UseInterceptors

} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { UtilsHelpers } from '../helpers/UtilsHelpers';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from '../HttpExceptions/ForbiddenException';
import { HttpExceptionFilter } from '../HttpExceptions/http-exception.filter';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { ExcludeNullInterceptor } from '../common/interceptors/excludeNull.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@Controller('cats')
@UseInterceptors(LoggingInterceptor)
@UseInterceptors(ExcludeNullInterceptor)
@UseInterceptors(TransformInterceptor)
@UseGuards(AuthGuard)
@UseGuards(RolesGuard)
export class CatsController {
      constructor(
        private readonly utilsHelpers: UtilsHelpers,
        private readonly catsService: CatsService
        ) {
          
      }

      @Post()
      // @UsePipes(ValidationPipe)
      @Roles('admin')
      async create(@Body() createCatDto: CreateCatDto) {
        console.log('creating cats');
        this.catsService.create(createCatDto);
        return null
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
