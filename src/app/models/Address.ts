export class Address {
  private _id: number;
  private _longtitude: number;
  private _latitude: number;
  private _displayName: string;
  private _country: string;
  private _zipCode: number;

  get id(): number {
    return this._id;
  }

  get longtitude(): number {
    return this._longtitude;
  }

  set longtitude(value: number) {
    this._longtitude = value;
  }

  get latitude(): number {
    return this._latitude;
  }

  set latitude(value: number) {
    this._latitude = value;
  }

  get displayName(): string {
    return this._displayName;
  }

  set displayName(value: string) {
    this._displayName = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get zipCode(): number {
    return this._zipCode;
  }

  set zipCode(value: number) {
    this._zipCode = value;
  }
}
