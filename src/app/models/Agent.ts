import {User} from './User';

export class Agent extends User {
  public contrctType: string;
  public startDate: Date;
  public endDate: Date;
  public salary: number;
  public nbrClaimsOpenedAndResolved: number;
  public nbrClaimsOpened: number;
  public nbrClaimsResolved: number;
  public moyAssiduite: number;
  public moyReponse: number;
  public dispoClaim: string;

}
