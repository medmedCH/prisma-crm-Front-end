import {Address} from '../Address';


export class StoreModel {
  private _id: number;
  private _name: string;
  private _telephone: string;
  private _capacity: number;
  private _address: Address;

  get id(): number {
    return this._id;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get telephone(): string {
    return this._telephone;
  }

  set telephone(value: string) {
    this._telephone = value;
  }

  get capacity(): number {
    return this._capacity;
  }

  set capacity(value: number) {
    this._capacity = value;
  }

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }
}
