import {User} from './User';
import {Agent} from './Agent';
import {Client} from './Client';

export class Repairrequest {
  public id: number;
  public warentyExp: Date;
  public user: Client;
  public RepairStatus: string;
  public createdDate: Date;
  public endDate: Date;
  public notes: string;
  public review: string;
  public statusRep: string;
  public score: number;


  constructor(review: string) {
    this.review = review;
  }

}
