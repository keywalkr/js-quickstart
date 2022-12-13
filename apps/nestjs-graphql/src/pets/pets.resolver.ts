import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {PetsService} from './pets.service';
import {Pet} from './model/pet';
import {GetPetArgs} from './dto/args/get-pet.args';
import {CreatePetInput} from './dto/input/create-pet.input';
import {Logger} from '@nestjs/common';

@Resolver(() => Pet)
export class PetsResolver {

  private readonly logger = new Logger(PetsResolver.name);

  constructor(private readonly petService: PetsService) {
  }

  @Query(() => [Pet], {name: 'pets', nullable: 'items'})
  async pets(): Promise<Pet[]> {
    return this.petService.findAll();
  }

  @Query(() => Pet, {name: 'pet', nullable: true})
  getPet(@Args() getPetArgs: GetPetArgs): Pet {
    return this.petService.getPet(getPetArgs);
  }

  @Mutation(() => Pet)
  createPet(@Args('createPetData') createPetData: CreatePetInput): Pet {
    return this.petService.createPet(createPetData);
  }

}
