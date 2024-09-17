import { Injectable, NotFoundException } from '@nestjs/common';
import { DtoLoginCreate } from '../dto/dto-login-create';
import { DtoLoginUpdate } from '../dto/dto-login-update';


@Injectable()
export class LoginService {
 private logins = [];

  get() {
    return this.logins;
  }

  getById(id: number): string {
    // Verificar si el índice es válido
    if (id <= 0 || id >= this.logins.length+1) {
      throw new NotFoundException(`Login con ID ${id} not encontrado`);
    }

    let login: String = this.logins[id-1];

    //! no se usa apostrofe si no esta comilla especial para concatenar con ${}
    return `Login Geby by ID: ${id} ${login}  `;
  }

  getById2(id: number){
    const login = this.logins.find(login => login.id ===id);
    if(!login){
      return new NotFoundException(`Login no encontrado ${id}`)
    }

    return login;
  }

creando(login: DtoLoginCreate){
  console.log(login);  
  this.logins.push({
    ...login,
    id: this.logins.length + 1,
  });

  return login;
}

actualizar(login: DtoLoginUpdate){
  console.log(login);

}

}
