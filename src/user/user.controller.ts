import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { Delete, Get, Param, Put } from '@nestjs/common/decorators';
import { get } from 'http';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private service: UserService) { }

    @Post()
    RegisterUser(@Body() user: User) {
        this.service.RegisterData(user);
    }

    @Get()
    async AllUser() {
        return this.service.getAllData();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
        return this.service.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() userData: User): Promise<any> {
        userData.id = Number(id);
        console.log('Update #' + userData.id)
        return this.service.update(userData);
    }  

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.service.delete(id);
    }  

}
