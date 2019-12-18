import {Address } from './Address';

export class User {

  public id: number;
  public firstName: string;
  public lastName: string;
  public password: string;
  public email: string;
  public createdAt: Date;
  public lastAuthentificated: Date;
  public passwordLastChanged: Date;
  public phoneNumber: string;
  public confirmationToken: string;
  public address: Address;
  public profileImage: Address;
  public token?: string;

}
