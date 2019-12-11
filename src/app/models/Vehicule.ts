import {User} from './User';

export class Vehicule {
  public id: number;
  public plate: string;
  public odometer: string;
  public fuelType: string;
  public driver: User;
  public location: number;

  constructor(id: number, plate: string, odometer: string, fuelType: string) {
    this.id = id;
    this.plate = plate;
    this.odometer = odometer;
    this.fuelType = fuelType;
  }

}
