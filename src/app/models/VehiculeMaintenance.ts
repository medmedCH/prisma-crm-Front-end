import {Vehicule} from './Vehicule';

export class VehiculeMaintenance {
  public id: number;
  public vehicule: Vehicule;
  public serviceType: string;
  public repairStatus: string;
  public totalprice: number;
  public maintainceDate: string;
  public odometer: number;

  constructor(id: number, vehicule: Vehicule, serviceType: string, repairStatus: string, totalprice: number, maintainceDate: string, odometer: number) {
    this.id = id;
    this.vehicule = vehicule;
    this.serviceType = serviceType;
    this.repairStatus = repairStatus;
    this.totalprice = totalprice;
    this.maintainceDate = maintainceDate;
    this.odometer = odometer;
  }
}
