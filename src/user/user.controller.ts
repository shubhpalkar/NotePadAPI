import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
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

}
