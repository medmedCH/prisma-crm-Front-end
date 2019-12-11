export class Client {
  get phoneNumber() {
    return this._phoneNumber;
  }

  set phoneNumber(value) {
    this._phoneNumber = value;
  }
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _fidelityScore: number;
  private _phoneNumber;

  get id(): number {
    return this._id;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get fidelityScore(): number {
    return this._fidelityScore;
  }

  set fidelityScore(value: number) {
    this._fidelityScore = value;
  }
}
