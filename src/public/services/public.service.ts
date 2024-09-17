import { Injectable } from '@nestjs/common';

@Injectable()
export class PublicService {

    get(){
        return 'Metodo publico'
    }
}
