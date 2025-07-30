import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return { message: 'User logged in successfully' };
  }

  signup() {
    return { message: 'User signed up successfully' };
  }
}
