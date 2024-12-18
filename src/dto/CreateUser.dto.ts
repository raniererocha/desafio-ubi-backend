import {IsEmail, IsString, MaxLength, MinLength} from 'class-validator'
import { IsValidCEP } from 'src/validation/CepValidation'

export class CreateUserDTO {
    @IsString({
        message: 'O nome precisa ser um text'
    })
    @MinLength(3, {
        message: 'O nome precisa de no mínimo 3 caracteres'
    })
    name: string

    @IsEmail({}, {message: 'O email precisa ser um email válido'})
    email: string

    @IsString()
    @MinLength(8, {
        message: 'O CEP tem no mínimo 8 dígitos'
    })
    @MaxLength(8, {
        message: 'O CEP tem no máximo 8 dígitos'
    })
    @IsValidCEP({
        message: 'Digite um CEP válido'
    })
    cep: string
}