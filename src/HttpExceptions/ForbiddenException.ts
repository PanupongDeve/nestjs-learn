import { HttpException, HttpStatus } from '@nestjs/common';

export class ForbiddenException extends HttpException {
    constructor(errMessage: string) {
        super(errMessage, HttpStatus.FORBIDDEN);
    }
}