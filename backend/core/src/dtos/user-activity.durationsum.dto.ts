import { ActivityDurationSumDTO } from "./activitity-durationsum.dto";

export class UserActivityDurationSumDTO extends ActivityDurationSumDTO{
  userid : string;
  sessionid: string;
}