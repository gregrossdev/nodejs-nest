import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./users/user.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        entities: ['dist/**/*/.entity{.ts,.js}', User],
        synchronize: true,
      }),
      UsersModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
