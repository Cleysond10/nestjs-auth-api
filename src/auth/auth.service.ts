import { Injectable } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';

@Injectable()
export class AuthService {
  signup(data: SignUpDTO) {
    console.log(data);
    return 'You have signed up';
  }

  signin(data: SignInDTO) {
    console.log(data);
    return 'You have signed in';
  }
}
