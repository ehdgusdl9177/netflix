import {
  Equals,
  IsArray,
  IsBoolean,
  IsDateString,
  IsDefined,
  IsEmpty,
  IsEnum,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNotIn,
  IsNumber,
  IsOptional,
  IsString,
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
  test: string;
}
