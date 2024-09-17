import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { LoginService } from '../services/login.service';
import { DtoLoginCreate } from '../dto/dto-login-create';
import { DtoLoginUpdate } from '../dto/dto-login-update';

@Controller('logins')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Get()
  get() {
    return this.loginService.get();
  }

  //por parametro
  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.loginService.getById2(id);
  }

  //por query
  @Get('')
  getAll(@Query() query:any){
    console.log(query);
   return 'pendiente';
  }

  @Post()
  crear(@Body() login: DtoLoginCreate) {
    return this.loginService.creando(login);
  }

  @Put()
  modificar(@Body() tarea: DtoLoginUpdate) {
    return 'Modificando login';
  }

  @Delete()
  eliminar() {
    return 'eliminar login';
  }

  @Patch()
  modificacionParcial() {
    return 'login modificacion parcial';
  }
}
