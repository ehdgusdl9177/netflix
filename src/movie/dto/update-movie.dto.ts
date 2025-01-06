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
} from 'class-validator';

enum MovieGenre {
  Fantasy = 'fantasy',
  Action = 'action',
}

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
  test: string;
}
