import {
    IsString,
    IsNumber,
    IsBoolean    
} from 'class-validator'

export class DtoLoginUpdate {
    @IsBoolean()
    status?: boolean
    @IsNumber()
    edad?: number
}