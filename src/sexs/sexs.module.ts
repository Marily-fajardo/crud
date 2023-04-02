import { Module } from '@nestjs/common';
import { SexsService } from './sexs.service';
import { SexsController } from './sexs.controller';
import { Sexs } from './entities/sex.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sexs])],
  controllers: [SexsController],
  providers: [SexsService]
})
export class SexsModule {}
