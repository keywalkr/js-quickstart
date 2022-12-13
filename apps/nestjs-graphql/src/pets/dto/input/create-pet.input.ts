import {Field, InputType} from '@nestjs/graphql';
import {IsNotEmpty, IsOptional} from 'class-validator';

@InputType()
export class CreatePetInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  age: number

  @Field()
  @IsOptional()
  type?: string;
}
