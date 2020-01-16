import {User} from './User';
import {Claim} from './Claim';

export class NoteClaim {

  public id: number;
  public description: string;
  public createdAt: Date;
  public createdBy: User;
  public claim: Claim;

}
