import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MANNQ_DATA } from './interface';

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

  @Post('/push')
  pushData(@Body() body: MANNQ_DATA) {
    return this.appService.pushData(body);
  }

  @Post('/pull')
  pullData() {
    return this.appService.pullData();
  }

  @Post('/clear')
  clearData() {
    return this.appService.clearData();
  }
}
