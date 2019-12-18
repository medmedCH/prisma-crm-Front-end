export class Offre {
  id: number;
  avantages: string;
  description: string;
  name: string;
  offtype: offtype;
  tarification: string;
}

export enum offtype {
  Offres_à_carte,
  Offres_à_facture

}
