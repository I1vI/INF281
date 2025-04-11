import { Controller, Get, Post, Body, Param, Patch, Delete, Query, UseGuards ,UseInterceptors,UploadedFile, Put} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CasbinGuard } from '../rbac/casbin.guard';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  // Registro y envío de código de verificación
  @Post('registrar')
  async registerUser(@Body() userData: CreateUsuarioDto) {
    return await this.usuarioService.registerUser(userData);
  }
  
  // Verificar el código y creación del usuario
  @Post('verificar')
  async verifyEmail(@Body() { email, code }: { email: string; code: string }) {
    return await this.usuarioService.verifyUser(email, code);
  }

  // Reenvia el código si ha expirado
  @Post('reenviar')
  async resendCode(@Body('email') email: string) {
    console.log("📩 Recibiendo solicitud de reenvío para:", email);
    return this.usuarioService.resendVerificationCode(email);
  }

  @Post('foto')
  @UseInterceptors(FileInterceptor('foto'))
  async subirFoto(
    @UploadedFile() file: Express.Multer.File,
    @Body('email') email: string,
  ) {
    console.log("📥 Email recibido:", email);
    console.log("🧾 Archivo recibido:", file);
    return await this.usuarioService.guardarFotoEnCloudinary(email, file);
  }

  
  
  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }
  
  // Obtener usuario por ID
  @UseGuards(JwtAuthGuard, CasbinGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  // Eliminar usuario
  @UseGuards(JwtAuthGuard, CasbinGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }

  // Editar usuario (nombre, ciudad, foto, etc.)
  @UseGuards(JwtAuthGuard, CasbinGuard)
  @UseInterceptors(FileInterceptor('foto'))
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.usuarioService.updateUser(id, updateUsuarioDto, file);
  }
  

  
}
