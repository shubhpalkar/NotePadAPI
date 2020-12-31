import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
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

    @Patch(':id')
    async updateMessage(@Param ('id', ParseIntPipe) id, @Body() msg: message): Promise<any>{
        msg.id  = Number(id);
        console.log ("updated value " +msg.id);
        return this.service.updateMessage(msg);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() msg: message): Promise<any> {
        msg.id = Number(id);
        console.log('Update #' + msg.id)
        return this.service.update(msg);
    }  
 

    @Delete('/:id')
    deleleMessage(@Param('id') id): Promise<any>{
        return this.service.getDelete(id);
    }
}
