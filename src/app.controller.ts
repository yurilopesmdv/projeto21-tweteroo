import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('tweets')
export class TweetsController {
  @Get()
  findAll(@Param() params: any): string {
    if (params.username) {
      return 'This action returns all tweets of this user';
    }
    return 'This action returns all tweets';
  }
}
