import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { message } from './message.entity';

@Injectable()
export class MessageService {

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
}
