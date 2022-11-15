import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getText();
  }

  @Post('/auth')
  checkAuth(@Body() body: { key: string }) {
    console.log(body);
    return this.appService.checkAuth(body['key']);
  }

  @Post('/keys')
  getKeys(@Body() body: { private: string }) {
    return this.appService.getKeys(body['key']);
  }
}
