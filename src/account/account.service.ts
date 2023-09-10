import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AccountService {
  constructor(private readonly userService: UserService) {}

  async createUser(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
