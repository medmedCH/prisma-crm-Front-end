import {Address } from './Address';

export class User {

  public id: number;
  public firstName: string;
  public lastName: string;
  public password: string;
  public email: string;
  public accountState: string;
  public role: string;
  public createdAt: Date;
  public lastAuthentificated: Date;
  public passwordLastChanged: Date;
  public phoneNumber: string;
  public confirmationToken: string;
  public address: Address;
  public profileImage: string;


  constructor(firstName: string, lastName: string, password: string, email: string, phoneNumber: string, profileImage: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.profileImage = profileImage;
  }

}
