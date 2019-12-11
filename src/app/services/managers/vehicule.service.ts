import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {User} from '../../models/User';
import {StorageService} from '../security/storage.service';
import {Vehicule} from '../../models/Vehicule';
import {BehaviorSubject} from 'rxjs';

import {ToastrService} from 'ngx-toastr';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT'
  }),
  responseType: 'text' as 'text'
};

@Injectable()
export class VehiculeService {
  private readonly API_URL = 'http://localhost:9080/prisma-crm-web/Vehicules/';

  constructor(private http: HttpClient) {
  }

  private toaster: ToastrService;

  dataChange: BehaviorSubject<Vehicule[]> = new BehaviorSubject<Vehicule[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;


  get data(): Vehicule[] {
    return this.dataChange.value;
  }


  getDialogData() {
    return this.dialogData;
  }

  getAllVehicules(): void {
    this.http.get<Vehicule[]>(this.API_URL + 'All').subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
  }


  // ADD, POST METHOD
  addItem(VehiculeItem: Vehicule): void {
    this.http.post(this.API_URL + 'add', VehiculeItem).subscribe(data => {
        this.dialogData = VehiculeItem;
      },
      (err: HttpErrorResponse) => {
      });
  }

  // UPDATE, PUT METHOD
  updateItem(VehiculeItem: Vehicule): void {
    this.http.put(this.API_URL + VehiculeItem.id, VehiculeItem).subscribe(data => {
        this.dialogData = VehiculeItem;
        console.log(VehiculeItem);

        this.toaster.success('success');
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.http.delete(this.API_URL + id).subscribe(data => {
        console.log(data['']);
        this.toaster.success('success');

      },
      (err: HttpErrorResponse) => {
        this.toaster.error('error');
      }
    );
  }

  assignD(idd: number, idv: number) {
    console.log(idd, idv);
    this.http.get(this.API_URL + 'assign/' + idd + '/' + idv).subscribe
    (
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );;

  }

}
