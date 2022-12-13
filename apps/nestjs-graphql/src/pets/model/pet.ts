import { Field, Int, ObjectType } from "@nestjs/graphql";
import { PetStatusEnum } from './petStatusEnum';

@ObjectType('Pet')
export class Pet {

  @Field()
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  age: number;

  @Field({nullable: true})
  type?: string;

  @Field(() => PetStatusEnum)
  status: PetStatusEnum
}
