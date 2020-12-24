import { Injectable } from '@nestjs/common';
import { Param, Patch } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { message } from './message.entity';

@Injectable()
export class MessageService {
    updateMessageData(msg: message): any {
        throw new Error('Method not implemented.');
    }

    constructor(@InjectRepository(message) private messageRepository: Repository<message>) { }

    async getAllMessage(): Promise<message[]> {
        return await this.messageRepository.find();
    }

    getOneMessage(id): Promise<message> {
        return this.messageRepository.findOne(id);
    }

    async writeMessage(msg: message) {
        return this.messageRepository.save(msg);
    }

    async updateMessage (msg: message): Promise <UpdateResult>{
        return await this.messageRepository.update(msg.id, message)
    }
    
    async getDelete(id): Promise <DeleteResult>{
        return this.messageRepository.delete(id)
    } 

    async update(msg: message): Promise<UpdateResult> {
        return await this.messageRepository.update(msg.id, msg);
    }

}
