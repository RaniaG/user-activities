import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from "typeorm";
import { Lookup } from './lookup.entity'
import { User } from "./user.entity";
@Entity()
export class Team extends Lookup {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 200 })
    name: string;

    @OneToMany(type => User, user => user.team)
    users: Promise<User[]>;
}