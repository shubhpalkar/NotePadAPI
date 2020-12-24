import { UnprocessableEntityException } from "@nestjs/common";
import { IsEmail, MinLength } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { isMainThread } from "worker_threads";

@Entity()
export class User extends BaseEntity{
   
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsEmail()
    userid: string

    @Column()
    username: string

    @Column()
    @MinLength(8, {message: "Please enter password with more than 8 characters"})
    psword: string

    @Column()
    @MinLength(8, {message: "Please enter password with more than 8 characters"})
    cnfPsword: string
}

export default User;
