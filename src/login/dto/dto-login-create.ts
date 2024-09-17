import {
    IsString,
    IsNumber,
    IsBoolean,    
    Min,
    MinLength
} from 'class-validator'
export class DtoLoginCreate {
    @IsString()
    @MinLength(1)
    user: string
    @IsBoolean()
    status: boolean
    @IsNumber()
    edad: number
}