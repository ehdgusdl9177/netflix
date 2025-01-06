import {
  Contains,
  Equals,
  IsAlphanumeric,
  IsArray,
  IsBoolean,
  IsCreditCard,
  IsDateString,
  IsDefined,
  IsDivisibleBy,
  IsEmpty,
  IsEnum,
  IsHexColor,
  IsIn,
  IsInt,
  IsLatLong,
  IsNegative,
  IsNotEmpty,
  IsNotIn,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  MinLength,
  NotContains,
  NotEquals,
  registerDecorator,
  Validate,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

// enum MovieGenre {
//   Fantasy = 'fantasy',
//   Action = 'action',
// }

// @ValidatorConstraint()
// class PasswordValidator implements ValidatorConstraintInterface {
//   validate(
//     value: any,
//     validationArguments?: ValidationArguments,
//   ): Promise<boolean> | boolean {
//     return value.length > 4 && value.length < 8;
//   }
//   defaultMessage?(validationArguments?: ValidationArguments): string {
//     return '비밀번호의 길이는 4~8자 여야합니다. 입력된 비밀번호: ($value)';
//   }
// }

// function IsPasswordValid(validationOptions?: ValidationOptions) {
//   return function (object: Object, propertyName: string) {
//     registerDecorator({
//       target: object.constructor,
//       propertyName,
//       options: validationOptions,
//       validator: PasswordValidator,
//     });
//   };
// }

export class UpdateMovieDto {
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsNotEmpty()
  @IsOptional()
  genre?: string;

  // null || undefined
  // @IsDefined()
  // @IsOptional()
  // @Equals('conde')
  // @NotEquals('code')
  // null || undefined || ''
  // @IsEmpty()
  // @IsNotEmpty()
  // Array
  // @IsIn(['action', 'fantasy'])
  // @IsNotIn(['action', 'fantasy'])
  // @IsBoolean()
  // @IsString()
  // @IsNumber()
  // @IsInt()
  // @IsArray()
  // @IsEnum(MovieGenre)
  // @IsDateString()
  // @IsDivisibleBy(5)
  // @IsPositive()
  // @IsNegative()
  // @Min(10)
  // @Max(10)
  // @Contains('code')
  // @NotContains('code')
  // @IsAlphanumeric()
  // @IsCreditCard()
  // @IsHexColor()
  // @MaxLength(16)
  // @MinLength(16)
  // @IsUUID()
  // @IsLatLong()
  // @Validate(PasswordValidator, {
  //   message: '다른 에러 메세지',
  // })
  // @IsPasswordValid({
  //   message: '다른 메세지',
  // })
  test: string;
}
