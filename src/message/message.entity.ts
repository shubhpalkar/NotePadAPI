import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, MinLength } from "class-validator";

@Entity()
export class message extends BaseEntity {
@PrimaryGeneratedColumn()
id: number;

@Column()
message_id: number;

@Column()
message_body: string;

@Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
timestamp_utc: Date;

@Column({default: 1})
status: number;

}
