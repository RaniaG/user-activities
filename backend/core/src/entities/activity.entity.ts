import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { UserActivities } from "./user-activities.entity";
import { UserActivitiesDuration } from "./user-activities-duration.entity";

@Entity()
export class Activity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 200 })
    name: string;

    @OneToMany(type => UserActivities, ua => ua.activity)
    activities: UserActivities[];

    @OneToMany(type => UserActivitiesDuration, ua => ua.activity)
    activitiesDurations: UserActivitiesDuration[];
}