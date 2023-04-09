import { Module } from '@nestjs/common';
import { SaveService } from './save.service';
import { SaveController } from './save.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Save, SaveSchema } from './entities/save.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Save.name, schema: SaveSchema }]),
  ],
  controllers: [SaveController],
  providers: [SaveService],
})
export class SaveModule {}
