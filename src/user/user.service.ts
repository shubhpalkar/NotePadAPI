import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    

    constructor(@InjectRepository(User) private UserRepository: Repository<User>) { }

    async RegisterData(user: User) {
        this.UserRepository.save(user);
    }
    async getAllData(): Promise<User[]> {
        return await this.UserRepository.find();
      }

    findOne(id: string): Promise<User> {
        return this.UserRepository.findOne(id);
      }

      async update(user: User): Promise<UpdateResult> {
        return await this.UserRepository.update(user.id, user);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.UserRepository.delete(id);
    }


    
}
