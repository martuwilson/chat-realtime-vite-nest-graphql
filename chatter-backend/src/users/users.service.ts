import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {

  constructor(private readonly userRepository: UserRepository) {}


  async create(createUserInput: CreateUserInput) {

    try {
      return this.userRepository.create({
      ...createUserInput,
      password: await this.hashPassword(createUserInput.password),
    });
    } catch (error) {
      if (error.message.includes('E11000')) { 
        throw new UnauthorizedException('Email already exists');
      }
      throw error;
      
    }
    
  }

  private async hashPassword(password: string) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async findAll() {
    return this.userRepository.find({});
  }

  async findOne(_id: string) {
    return this.userRepository.findOne({ _id });
  }

  async update(_id: string, updateUserInput: UpdateUserInput) {

    if(updateUserInput.password) {
      updateUserInput.password = await this.hashPassword(updateUserInput.password);
    }

    return this.userRepository.findOneAndUpdate(
      { _id },
      { $set: {...updateUserInput}
    });
  }

  async remove(_id: string) {
    return this.userRepository.findOneAndDelete({ _id });
  }

  async verifyUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({ email });
    const passwordIsValid = user && await bcrypt.compare(password, user.password);

    if(!passwordIsValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
