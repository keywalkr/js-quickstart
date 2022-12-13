import {Injectable, Logger} from '@nestjs/common';
import {Pet} from './model/pet';
import {v4 as uuidv4} from 'uuid'
import {PetStatusEnum} from './model/petStatusEnum';
import {CreatePetInput} from './dto/input/create-pet.input';
import {GetPetArgs} from './dto/args/get-pet.args';
import {UpdatePetInput} from './dto/args/update-pet.input';

@Injectable()
export class PetsService {

  private readonly logger = new Logger(PetsService.name);

  private pets: Pet[] = [];

  async findAll(): Promise<Pet[]> {
    return this.pets;
  }

  updatePet(updatePetData: UpdatePetInput): Pet {
    const pet = this.pets.find(pet => pet.id = updatePetData.id);
    Object.assign(pet, updatePetData);

    return pet;
  }

  getPet(getPetArgs: GetPetArgs): Pet {
    this.logger.log('Get Pet: ' + getPetArgs.id)
    return this.pets.find(pet => pet.id == getPetArgs.id)
  }

  createPet(createPetData: CreatePetInput): Pet {
    this.logger.log('Create Pet...')
    const pet: Pet = {
      id: uuidv4(),
      status: PetStatusEnum.AVAILABLE,
      ...createPetData
    }
    this.pets.push(pet);

    return pet;
  }
}
