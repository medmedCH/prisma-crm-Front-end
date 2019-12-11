export class ReductionRatioModel {
  private _id: number;
  private _labelRatio: string;
  private _fidelityScoreForEach: number;
  private _reductionRatio: number;

  get id(): number {
    return this._id;
  }
  get labelRatio(): string {
    return this._labelRatio;
  }

  set labelRatio(value: string) {
    this._labelRatio = value;
  }

  get fidelityScoreForEach(): number {
    return this._fidelityScoreForEach;
  }

  set fidelityScoreForEach(value: number) {
    this._fidelityScoreForEach = value;
  }

  get reductionRatio(): number {
    return this._reductionRatio;
  }

  set reductionRatio(value: number) {
    this._reductionRatio = value;
  }
}
