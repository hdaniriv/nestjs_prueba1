import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

//Esta clase intersecta y transforma los valores de los parametros  de query
@Injectable()
export class LoginPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value',value)

     // Validar que 'nombre' esté presente
     if (!('nombre' in value)) {
      throw new HttpException('El parámetro "nombre" es obligatorio', HttpStatus.BAD_REQUEST);
    }
 
    let xNombre: string;

    // Intentar convertir 'nombre' a string y manejar la excepción si no es posible
    try {
       // Convertimos nombre a string y eliminamos espacios innecesarios
      xNombre = String(value.nombre).trim();

      // Verificar si el string resultante es vacío
      if (xNombre === '') {
        throw new HttpException('El parámetro "nombre" no puede estar vacío', HttpStatus.BAD_REQUEST);
      }  
    } catch (error) {
      throw new HttpException('No se pudo convertir "nombre" a string', HttpStatus.BAD_REQUEST);
    }

    // convertimos edad a numeros, todo lo que biene en query lo toma como string
    const xEdad = parseInt(value.edad.toString(), 10);

    if(isNaN(xEdad)){
      throw new HttpException('Eda debe ser numerico', HttpStatus.BAD_REQUEST);
    }

    return {...value, edad : xEdad, nombre: xNombre};
  }
}
