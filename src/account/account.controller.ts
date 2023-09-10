import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AccountService } from './account.service';

@Controller('api')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.accountService.createUser(createUserDto);
  }
}
