import { ValidatorConstraint, ValidatorConstraintInterface, ValidationOptions, registerDecorator } from "class-validator";


@ValidatorConstraint({async: true})
export class IsValidCEPConstraint implements ValidatorConstraintInterface {
    private validatedCeps: Set<string>
    constructor() {
        this.validatedCeps = new Set<string>()
    }
    async validate(value: string) {
        try {
            if (this.validatedCeps.has(value)) {
                return true
            }
            const request = await fetch(`https://brasilapi.com.br/api/cep/v1/${value}`)
            const data = await request.json()
            if (data.errors) {
                return false
            }
            return true
        } catch (error) {
            return false
        }
    }
    
}
export function IsValidCEP(validationOptions?:  ValidationOptions) {
    return function(object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsValidCEPConstraint
        })
    }
}