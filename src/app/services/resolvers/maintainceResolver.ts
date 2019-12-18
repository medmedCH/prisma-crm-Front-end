import {Resolve, ActivatedRoute, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {VehiculeMaintenance} from '../../models/VehiculeMaintenance';
import {MaintenanceService} from '../managers/maintenance.service';

@Injectable()
export class MaintainceResolver implements Resolve<VehiculeMaintenance[]> {
  constructor(private maintanceService: MaintenanceService) {}

  // @ts-ignore
  resolve(route: ActivatedRoute, state: RouterStateSnapshot): Observable<VehiculeMaintenance[]> {
    // @ts-ignore
    return this.maintanceService.getAllMaint();
  }
}
