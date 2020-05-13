import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { TeamsController } from './teams/teams.controller';
import { ActivitiesController } from './activities/activities.controller';
import { UserService, UserActivityService, TeamService } from '../../services/build/index';
import { ActivitiesGateway } from './activities/activities.gateway';
import { ReportService } from '../../services/build/index';
import { ReportController } from './reports/report.controller';
import { UserRepository, TeamRepository } from '../../Infrastructure/build/index';
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
const ReportProvider = {
  provide: 'IReportService',
  useClass: ReportService
}


@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "default",
      type: 'postgres',
      host: '172.17.0.2',
      port: 5432,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'test',
      entities: [
        User, Team, UserActivities, UserActivitiesDuration, Activity,
        TeamRepository, UserRepository
      ],

      synchronize: true,
    }),
  ],
  controllers: [AppController, UsersController, TeamsController, ActivitiesController, ReportController],
  providers: [AppService,
    UserServiceProvider,
    ReportProvider,
    ActivitiesGateway,
    UserActivityServiceProvider,
    TeamServiceProvider, UserRepository, TeamRepository],
})
export class AppModule { }
