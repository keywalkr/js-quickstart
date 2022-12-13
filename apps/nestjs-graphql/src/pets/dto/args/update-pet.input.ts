import {Field, InputType} from '@nestjs/graphql';
import {IsNotEmpty, IsOptional} from 'class-validator';
import {PetStatusEnum} from '../../model/petStatusEnum';

@InputType()
export class UpdatePetInput {

  @Field()
  @IsNotEmpty()
  id: string;

  @Field()
  @IsOptional()
  name?: string;

  @Field()
  @IsOptional()
  age?: number;

  @Field()
  @IsOptional()
  type?: string;

  @Field()
  @IsOptional()
  status?: PetStatusEnum;
}
