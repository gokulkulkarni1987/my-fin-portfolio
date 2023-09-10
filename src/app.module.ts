import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'gokulkulkarni',
      password: 'toor',
      database: 'fin_portfolio_auth',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    AuthModule,
    AccountModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
