import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import {MessageService} from '../message/message.service';
import { message } from './message.entity';

@Controller('message')
export class MessageController {
    constructor (private service: MessageService) {}

    @Get()
    async getMessage(){
        return this.service.getAllMessage();
    }

    @Get(':id')
    OneMessage(@Param ('id', ParseIntPipe ) id) {
        return this.service.getOneMessage(id);
    }

    @Post ()
    WriteMessage(@Body() msg: message){
        return this.service.writeMessage(msg);
    }

}
