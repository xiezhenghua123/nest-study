import { Body, Controller, Post } from '@nestjs/common';

@Controller('log')
export class LogController {
  @Post('/add-log')
  log(@Body() body) {
    console.log(body);
  }
}
