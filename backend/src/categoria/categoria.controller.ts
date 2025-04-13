import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { CasbinGuard } from 'src/rbac/casbin.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('evento/categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  //@UseGuards(JwtAuthGuard, CasbinGuard)
  @Post()
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.create(createCategoriaDto);
  }

  //@UseGuards(JwtAuthGuard, CasbinGuard)
  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  //@UseGuards(JwtAuthGuard, CasbinGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaService.findOne(+id);
  }

  //@UseGuards(JwtAuthGuard, CasbinGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaService.update(+id, updateCategoriaDto);
  }

  //@UseGuards(JwtAuthGuard, CasbinGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(+id);
  }
}
