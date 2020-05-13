import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Activity } from "./activity.entity";
import { User } from "./user.entity";

@Entity()
export class UserActivities {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Activity, act => act.activities)
    activity: Activity;

    @ManyToOne(type => User, usr => usr.activities)
    user: User;

    @Column()
    sessionId: number;

    @Column()
    action: string;

    @Column("timestamp")
    timeStamp: string;
}