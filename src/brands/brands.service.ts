import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brands } from './entities/brand.entity';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brands)
    private brandsRepository: Repository<Brands>,
  ) {}

  async create(createBrandDto: CreateBrandDto): Promise<Brands> {
    const brand = this.brandsRepository.create(createBrandDto);
    return this.brandsRepository.save(brand);
  }

  async findAll(): Promise<Brands[]> {
    return this.brandsRepository.find();
  }

  async findOne(id: string): Promise<Brands> {
    return this.brandsRepository.findOneBy({id});
  }

  async update(id: string, updateBrandDto: UpdateBrandDto): Promise<void> {
    await this.brandsRepository.update(id, updateBrandDto);
  }

  async remove(id: string): Promise<void> {
    await this.brandsRepository.delete(id);
  }
}