import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: SignUpDTO) {
    return this.authService.signup(body);
  }

  @Post('signin')
  signin(@Body() body: SignInDTO) {
    return this.authService.signin(body);
  }

  @UseGuards(AuthGuard)
  @Get('verify-user')
  verifyUserByAccessToken(@Request() request) {
    return request.user;
  }

  @Get()
  async findAll() {
    return this.authService.findAll();
  }

  @Get('find/:email')
  async findOne(@Param('email') email: string) {
    return this.authService.findOne(email);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.authService.delete(id);
  }
}
