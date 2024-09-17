import { Controller,Get } from '@nestjs/common';
import { PublicService } from '../services/public.service';

@Controller('public')
export class PublicController {
    constructor(private publicService: PublicService){}

    @Get()
    get(){
        return this.publicService.get();
    }

    


}
