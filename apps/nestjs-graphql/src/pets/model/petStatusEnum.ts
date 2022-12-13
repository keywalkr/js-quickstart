import {registerEnumType} from '@nestjs/graphql';

export enum PetStatusEnum {
  AVAILABLE,
  PENDING ,
  SOLD
}

registerEnumType(PetStatusEnum, {
  name: 'PetStatusEnum',
  description: 'Pet Status'
});
