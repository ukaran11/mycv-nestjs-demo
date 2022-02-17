import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password: string;

    @AfterInsert()
    logInsert() {
        console.log('Inserted User with Id ', this.id)
    }

    @AfterUpdate() 
    logUpdate() {
        console.log('Removed User with id', this.id)
    }

    @AfterRemove()
    logRemove() {
        console.log('Removed User with Id', this.id)
    }
}