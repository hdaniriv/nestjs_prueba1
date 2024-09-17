import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
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
import { LoginPipe } from '../pipes/login.pipe';

@Controller('logins')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Get()
  get() {
    return this.loginService.get();
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

  @Get('/new')
  //!con HttpCode podemos cambiar el codigo de respuesta al que necesitemos
  @HttpCode(500)
  new(){
    return 'cambiamos el codigo https de respuesta';
  }

  //!prueba de pipes convirtiendo parametros de query
  //para utilizar query solo colocamos ?  seguido del nombre de la variable signo = y el valor, para poner mas variables &
  //ejemplo de query  localhost:3000/login/saludo?nombre=daniel rivera&edad=43
  @Get('/saludo')
  saludar(@Query(LoginPipe) query: {nombre:string, edad:number}){
    console.log(typeof query.nombre)
    console.log(typeof query.edad)
    return `hola ${query.nombre}, tines ${query.edad} anio de edad`; 
  }

    //por parametro, las rutas por parametro es mejor colcoarlas de ultimo por si existen otras rutas en el mismo verbo
    //con nombre no colapsen, en este caso existe otro metodo con get llamado New, si se coloca despues no funciona 
    //debido a la ruta /:id
    @Get('/:id')
    getById(@Param('id', ParseIntPipe) id: number) {
      return this.loginService.getById2(id);
    }

}
