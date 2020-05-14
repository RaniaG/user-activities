import { UserActivityDurationSumDTO } from "../dtos/user-activity.durationsum.dto";
import { TeamActivityDurationSumDTO } from "../dtos/team-activity-durationsum.dto";

export interface IReportService {
    getUserActivityDurationSum(): Promise<UserActivityDurationSumDTO[]>;
    getTeamActivityDurationSum(): Promise<TeamActivityDurationSumDTO[]>;
}