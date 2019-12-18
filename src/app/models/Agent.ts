import {User} from './User';

export class Agent extends User {
  public contractType: string;
  public startDate: Date;
  public endDate: Date;
  public salary: number;
  public nbrClaimsOpenedAndResolved: number;
  public nbrClaimsOpened: number;
  public nbrClaimsResolved: number;
  public nbrClaimsConfirmed: number;
  public moyAssiduite: number;
  public moyReponse: number;
  public dispoClaim: string;
}
