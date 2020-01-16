import {User} from './User';
import {Claim} from './Claim';

export class NoteClaim {

  public id: number;
  public description: string;
  public createdAt: Date;
  public createdBy: User;
  public createdById: number;
  public claim: Claim;

  public constructor(desc: string, idU: number) {
    this.description = desc;
    this.createdById = idU;
  }
}
