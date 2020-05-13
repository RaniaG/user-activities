import { Controller, Post, Body, Get, Param, Inject } from '@nestjs/common';
import { TeamDto, ITeamService } from '../../../core/build/index';

@Controller('teams')
export class TeamsController {

    constructor(@Inject("ITeamService") private readonly teamService: ITeamService) { }
    @Post()
    createTeam(@Body() createTeamDto: TeamDto) {
        return this.teamService.createTeam(createTeamDto);
    }
    @Get()
    getAllTeams() {
        return this.teamService.getAllTeams();
    }

}
