import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.host,
      port: +process.env.port,
      username: process.env.username,
      password: process.env.password,
      database: process.env.database,
      synchronize: true,
      autoLoadEntities: true,
      ssl: true,
    }),
  ],
})
export class AppModule {}
