

import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinTable, OneToMany } from "typeorm";
import { Activity } from "./activity.entity";
import { Team } from "./team.entity";
import { UserActivities } from "./user-activities.entity";
import { UserActivitiesDuration } from "./user-activities-duration.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 200 })
    name: string;

    @ManyToOne(type => Team, team => team.users)
    team: Team;

    @OneToMany(type => UserActivities, ua => ua.user)
    activities: UserActivities[];

    @OneToMany(type => UserActivitiesDuration, ua => ua.user)
    activitiesDurations: UserActivitiesDuration[];
}