export class ProductModel {
/*
* "product": {
            "id": 1,
            "reference": "DDD",
            "name": "KADHE",
            "description": "kadhe",
            "type": "ADSL",
            "guarantee": 33,
            "stock": 50,
            "price": 122.0
        }*/
private _id: number;
private _reference: string;
private _description: string;
private _type: string;
private _stock: number;
private _price: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get reference(): string {
    return this._reference;
  }

  set reference(value: string) {
    this._reference = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get stock(): number {
    return this._stock;
  }

  set stock(value: number) {
    this._stock = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}
