import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from './user/user.module';

@Module({
  imports: [JwtModule, UserModule],
})
export class AppModule {}
