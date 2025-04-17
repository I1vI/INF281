import { Controller, Get, Post, Body, UseGuards, Param, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { PatrocinadorService } from './patrocinador.service';
import { CreatePatrocinadorDto } from './dto/create-patrocinador.dto';
import { UpdatePatrocinadorDto } from './dto/update-patrocinador.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CasbinGuard } from '../rbac/casbin.guard';

@Controller('evento/patrocinador')
export class PatrocinadorController {
  constructor(private readonly patrocinadorService: PatrocinadorService) {}

  //@UseGuards(JwtAuthGuard, CasbinGuard)
  @Put('evento/:id_evento')
  async updatePatrocinadoresEvento(
    @Param('id_evento') id_evento: string, 
    @Body() patrocinadores: { id_patrocinador: number }[]
  ) {
    const eventoId = parseInt(id_evento, 10);

    if (isNaN(eventoId)) {
      throw new HttpException(
        'El id_evento debe ser un número válido',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.patrocinadorService.updatePatrocinadoresDeEvento(eventoId, patrocinadores);
  }

  //@UseGuards(JwtAuthGuard, CasbinGuard)
  @Get('evento/:id_evento')
  async getPatrocinadoresByEvento(@Param('id_evento') id_evento: string) {
    const eventoId = parseInt(id_evento, 10);
    if (isNaN(eventoId)) {
      throw new Error('El id_evento debe ser un número válido');
    }
    return this.patrocinadorService.getPatrocinadoresByEvento(eventoId);
  }

  //@UseGuards(JwtAuthGuard, CasbinGuard)
  @Post()
  create(@Body() data: CreatePatrocinadorDto) {
    return this.patrocinadorService.create(data);
  }

  //@UseGuards(JwtAuthGuard, CasbinGuard)
  @Get()
  findAll() {
    return this.patrocinadorService.findAll();
  }

  //@UseGuards(JwtAuthGuard, CasbinGuard)
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patrocinadorService.findOne(+id);
  }
  
  //@UseGuards(JwtAuthGuard, CasbinGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: UpdatePatrocinadorDto,
  ) {
    return this.patrocinadorService.update(+id, data);
  }

  //@UseGuards(JwtAuthGuard, CasbinGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patrocinadorService.remove(+id);
  }




}
