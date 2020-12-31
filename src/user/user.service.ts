import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';
import {getRepository} from "typeorm"; 

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

    async checkLoging(user: User): Promise<User>{
        // const userlog = await getRepository(User). .createQueryBuilder("User") .where("User.userid == :userid" && "user.psword == :psword") .getOne();
        const userlog = await getRepository(User)
        .findOne({where: ("userid = :userid" && "psword == :psword")})   
        
        return userlog;
        console.log (userlog)
    }

   
    

    
}
