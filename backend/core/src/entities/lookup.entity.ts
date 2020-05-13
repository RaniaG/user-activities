import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Lookup {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column("varchar", { length: 200 })
    public name: string;

}