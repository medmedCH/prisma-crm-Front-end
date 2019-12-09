import {User} from './User';
import {Promotion} from './Promotion';


export class Product {
  public id: number;
  public reference: string;
  public name: string;
  public description: string;
  public type: string;
  public guarantee: number;
  public price: number;
  public new_price: number;
  public brand: string;
  public memory: string;
  public resolution: string;
  public camera: string;
  public imageUrl: string;
  public createdAt: string;
  public agent: User;
  public stock: number;
  public promotion: Promotion;
  /*public constructor(id: number, reference: string, name: string, description: string) {
    this.id = id;
    this.reference = reference;
    this.name = name;
    this.description = description;
  }*/


}

