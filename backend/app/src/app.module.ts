import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { TeamsController } from './teams/teams.controller';
import { ActivitiesController } from './activities/activities.controller';
import { UserService, UserActivityService, TeamService, TeamActivityService } from '../../services/build/index';
import { ActivitiesGateway } from './activities/activities.gateway';
import { ReportController } from './reports/report.controller';
import "reflect-metadata";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Team, UserActivities, UserActivitiesDuration, Activity } from '../../core/build';

const UserServiceProvider = {
  provide: 'IUserService',
  useClass: UserService
};
const TeamServiceProvider = {
  provide: 'ITeamService',
  useClass: TeamService
};
const UserActivityServiceProvider = {
  provide: 'IUserActivityService',
  useClass: UserActivityService
};
const TeamActivityServiceProvider = {
  provide: 'ITeamActivityService',
  useClass: TeamActivityService
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "default",
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'test',
      entities: [
        User, Team, UserActivities, UserActivitiesDuration, Activity,
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Team, UserActivities, UserActivitiesDuration, Activity])
  ],
  controllers: [AppController, UsersController, TeamsController, ActivitiesController, ReportController],
  providers: [AppService,
    UserServiceProvider,
    ActivitiesGateway,
    UserActivityServiceProvider,
    TeamActivityServiceProvider,
    TeamServiceProvider,],
})
export class AppModule { }
