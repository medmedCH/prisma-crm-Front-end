import {ClientOrderModel} from './ClientOrderModel';

export class RecetteModel {
  private _dateCreation;
  private _totaleRecette: number;
  private _commandes: Array<ClientOrderModel>;

  get dateCreation(): Date {
    return this._dateCreation;
  }

  set dateCreation(value: Date) {
    this._dateCreation = value;
  }

  get totaleRecette(): number {
    return this._totaleRecette;
  }

  set totaleRecette(value: number) {
    this._totaleRecette = value;
  }

  get commandes(): Array<ClientOrderModel> {
    return this._commandes;
  }

  set commandes(value: Array<ClientOrderModel>) {
    this._commandes = value;
  }
}
