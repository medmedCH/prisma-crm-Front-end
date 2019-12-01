

export class Product {
  id: number;
  reference: string;
  name: string;
  description: string;
  type: string;
  guarantee: number;
  price: number;
  new_price: number;
  brand: string;
  memory: string;
  resolution: string;
  camera: string;
  imageUrl: string;

  public constructor(id: number, reference: string, name: string, description: string) {
    this.id = id;
    this.reference = reference;
    this.name = name;
    this.description = description;
  }



}

