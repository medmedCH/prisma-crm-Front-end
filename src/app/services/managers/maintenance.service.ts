import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {User} from '../../models/User';
import {StorageService} from '../security/storage.service';
import {BehaviorSubject} from 'rxjs';

import {ToastrService} from 'ngx-toastr';
import {VehiculeMaintenance} from '../../models/VehiculeMaintenance';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT'
  }),
  responseType: 'text' as 'text'
};

@Injectable()
export class MaintenanceService {
  private readonly API_URL = 'http://localhost:9080/prisma-crm-web/maintenance/';

  constructor(private http: HttpClient) {
  }

  private toaster: ToastrService;

  dataChange: BehaviorSubject<VehiculeMaintenance[]> = new BehaviorSubject<VehiculeMaintenance[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;


  get data(): VehiculeMaintenance[] {
    return this.dataChange.value;
  }


  getDialogData() {
    return this.dialogData;
  }

  getAllMaint() {
    return this.http.get<VehiculeMaintenance>(this.API_URL + 'getAll/');
  }


  approveMaint(id: number) {
    return this.http.get(this.API_URL + 'approve/' + id);
  }

  // ADD, POST METHOD
  addItem(VehiculeItem: VehiculeMaintenance): void {
    this.http.post(this.API_URL + 'add', VehiculeItem).subscribe(data => {
        this.dialogData = VehiculeItem;
      },
      (err: HttpErrorResponse) => {
      });
  }


  updateItem(VehiculeItem: VehiculeMaintenance): void {
    this.http.put(this.API_URL + VehiculeItem.id, VehiculeItem).subscribe(data => {
        this.dialogData = VehiculeItem;
        this.toaster.success('success');
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }


}
