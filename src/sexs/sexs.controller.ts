import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { SexsService } from './sexs.service';
import { CreateSexDto } from './dto/create-sex.dto';
import { UpdateSexDto } from './dto/update-sex.dto';
import {  Sexs } from './entities/sex.entity';

@Controller('sex')
export class SexsController {

  constructor(private readonly sexsService: SexsService) {}

  @Post()
  async create(@Body() createSexDto: CreateSexDto): Promise<Sexs> {
    return this.sexsService.create(createSexDto);
  }

  @Get()
  findAll() {
    return this.sexsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sexsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSexDto: UpdateSexDto) {
    await this.sexsService.update(id, updateSexDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    await this.sexsService.remove(id);
  }
}