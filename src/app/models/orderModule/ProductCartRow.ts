import {ProductModel} from './ProductModel';
import {CartModel} from './CartModel';
import {ReductionRatioModel} from './ReductionRatioModel';

export class ProductCartRow {

  private _product: ProductModel;
  private _cart: CartModel;
  private _quantity: number;
  private _finalPrice: number;
  private _usedFidelityPoints: number;
  private _totalPriceWNReduction: number;
  private _originalUnitPrice: number;
  private _reductionRatio: ReductionRatioModel;

  get product(): ProductModel {
    return this._product;
  }

  set product(value: ProductModel) {
    this._product = value;
  }

  get cart(): CartModel {
    return this._cart;
  }

  set cart(value: CartModel) {
    this._cart = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get originalUnitPrice(): number {
    return this._originalUnitPrice;
  }

  set originalUnitPrice(value: number) {
    this._originalUnitPrice = value;
  }

  get finalPrice(): number {
    return this._finalPrice;
  }

  set finalPrice(value: number) {
    this._finalPrice = value;
  }

  get usedFidelityPoints(): number {
    return this._usedFidelityPoints;
  }

  set usedFidelityPoints(value: number) {
    this._usedFidelityPoints = value;
  }

  get totalPriceWNReduction(): number {
    return this._totalPriceWNReduction;
  }

  set totalPriceWNReduction(value: number) {
    this._totalPriceWNReduction = value;
  }

  get reductionRatio(): ReductionRatioModel {
    return this._reductionRatio;
  }

  set reductionRatio(value: ReductionRatioModel) {
    this._reductionRatio = value;
  }
}
