import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ExcludeNullInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('excludeNull: Before...');
    return next
      .handle()
      .pipe(
          map(value => {
              console.log('excludeNull: After...')
              return value === null ? '' : value;
          } )
        );
  }
}