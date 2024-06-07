import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class PasswordConfirmation implements ValidatorConstraintInterface {
    validate(password: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
