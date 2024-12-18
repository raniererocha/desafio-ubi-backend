import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dto/CreateUser.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
  @Post('/users')
  @UsePipes(new ValidationPipe())
  async createUser(@Body() body: CreateUserDTO) {
    console.log(body)
    try {
      return await this.appService.createUser(body)
    } catch (error) {
      if (error === "Email já cadastrado") {
        throw new HttpException('Email já cadastrado', HttpStatus.BAD_REQUEST)
      }

    }
  }

  @Get('/users')
  async listUsers() {
    return await this.appService.listUsers()
  }
}
