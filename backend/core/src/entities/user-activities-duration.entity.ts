import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Activity } from "./activity.entity";
import { User } from "./user.entity";

@Entity()
export class UserActivitiesDuration {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Activity, act => act.activitiesDurations)
    activity: Activity;

    @ManyToOne(type => User, usr => usr.activitiesDurations)
    user: User;

    @Column()
    sessionId: string;

    @Column()
    duration: number;
}