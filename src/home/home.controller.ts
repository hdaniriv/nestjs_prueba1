import { Controller,Get } from '@nestjs/common';

//Si el controler no tiene ruta inicial sera home o desde donde levanta la api sin nada adicional
//los metodos deveran indicar como se llaman
@Controller()
export class HomeController {


    //!como llamar el mismo metodo con diferentes rutas
    @Get(['/','home'])
    get(){

        const currentDate = new Date();
        return `Home Api Current server date and time: ${currentDate.toISOString()}`;

    }

}
