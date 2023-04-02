import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

import slugify from 'slugify';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}
  
  update(id: string, updateCategoryDto: UpdateCategoryDto) {
   return this.categoriesRepository.update(id,updateCategoryDto);
  }
  

  create(createCategoryDto: CreateCategoryDto) {
     return this.categoriesRepository.save(createCategoryDto);
 }

 findAll(): Promise<Category[]> {
  return this.categoriesRepository.find();
}

  findOne(id: string): Promise<Category | null> {
    return this.categoriesRepository.findOneBy({id });
  }

  async remove(id: string): Promise<void> {
    await this.categoriesRepository.delete(id);
  }
}