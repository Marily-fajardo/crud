import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  
  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>

  ){}

  async create(createMenuDto: CreateMenuDto) {
    const menu = this.menuRepository.create(createMenuDto);
    await this.menuRepository.save(menu);
    return menu;
  }

  findAll() {
    return this.menuRepository.find();
  }

  findOne(id: string) {
    return this.menuRepository.findOne({ where: { id }});
  }

  async updatemenu(id: string, menu: Menu) {
    await this.menuRepository.update(id, menu);
  }

  remove(id: string) {
    this.menuRepository.delete(id);
    return "Eliminado";
  }
}
