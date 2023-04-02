import { Injectable } from '@nestjs/common';
import { CreateSexDto } from './dto/create-sex.dto';
import { UpdateSexDto } from './dto/update-sex.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sexs } from './entities/sex.entity';

@Injectable()
export class SexsService {
  constructor(
    @InjectRepository(Sexs)
    private sexsRepository: Repository<Sexs>,
  ) {}

  async create(createSexsDto: CreateSexDto): Promise<Sexs> {
    const sexs = this.sexsRepository.create(createSexsDto);
    return this.sexsRepository.save(sexs);
  }

  async findAll(): Promise<Sexs[]> {
    return this.sexsRepository.find();
  }

  async findOne(id: string): Promise<Sexs> {
    return this.sexsRepository.findOneBy({ id });
  }

  async update(id: string, updateSexsDto: UpdateSexDto): Promise<void> {
    await this.sexsRepository.update(id, updateSexsDto);
  }

  async remove(id: string): Promise<void> {
    await this.sexsRepository.delete(id);
  }
}