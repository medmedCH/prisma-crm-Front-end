export class Promotion {
  public id: number;
  public e_date: Date;
  public name: string;
  public percentage: number;
  public period: period;
  public s_date: Date;


}

export enum period {
  hiver,
  automne,
  printemps,
  été


}
