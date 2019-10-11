import { Module, Global } from '@nestjs/common';
import { UtilsHelpers } from './UtilsHelpers';

@Global()
@Module({
    providers: [UtilsHelpers],
    exports: [UtilsHelpers]
})
export class HelpersModule {}
