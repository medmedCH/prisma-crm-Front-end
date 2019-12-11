export class ClientOrderModel {

  private _id: number;
  private _createdAt: Date;
  private updatedAt: Date;
  private _reductionRatio: number;
  private _orderNature: string;
  private _totale: number;
  public valid: boolean;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get reductionRatio(): number {
    return this._reductionRatio;
  }

  set reductionRatio(value: number) {
    this._reductionRatio = value;
  }

  get orderNature(): string {
    return this._orderNature;
  }

  set orderNature(value: string) {
    this._orderNature = value;
  }

  get totale(): number {
    return this._totale;
  }

  set totale(value: number) {
    this._totale = value;
  }

}
