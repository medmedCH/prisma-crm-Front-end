import {User} from './User';
import {Agent} from './Agent';
import {Client} from './Client';

export class Claim {
  public id: number;
  public title: string;
  public code: string;
  public description: string;
  public priority: string;
  public type: string;
  public status: string;
  public createdAt: Date;
  public openedAt: Date;
  public delegatedAt: Date;
  public resolvedAt: Date;
  public isFaq: boolean;
  public createdById: number;
  public firstResponsable: Agent;
  public responsable: Agent;
  public resolvedBy: Agent;

  public constructor(title: string, d: string, ty: string, p: string, uid: number) {
    this.title = title;
    this.description = d;
    this.type = ty;
    this.priority = p;
    this.createdById = uid;
  }
}
