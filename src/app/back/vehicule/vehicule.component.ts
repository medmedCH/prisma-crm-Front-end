import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {VehiculeService} from '../../services/managers/vehicule.service';
import {Vehicule} from '../../models/Vehicule';
import {HttpClient} from '@angular/common/http';
import {AddDialogComponent} from './dialogs/add/add.dialog.component';
import {EditDialogComponent} from './dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {map} from 'rxjs/operators';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
})
export class VehiculeComponent implements OnInit {
  displayedColumns = ['id', 'plate', 'odometer', 'fuelType', 'driver', 'actions'];
  exampleDatabase: VehiculeService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  id: number;
  show = true;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public dataService: VehiculeService,
              private toast: ToastrService) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.loadData();

  }

  refresh() {
    this.loadData();
  }

  addNew(vehicule: Vehicule) {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {vehicule: vehicule}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.toast.success('Added Successfuly', 'Success!');
        this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        this.refreshTable();
      }
    });
  }

  startEdit(i: number, id: number, plate: string, odometer: string, fuelType: string) {
    this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {id: id, plate: plate, odometer: odometer, fuelType: fuelType}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside VehiculeService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
        this.toast.warning('Edit Successfuly', 'Success!');
      }
    });
  }

  deleteItem(i: number, id: number, plate: string, odometer: string, fuelType: string) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {id: id, plate: plate, odometer: odometer, fuelType: fuelType}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // for delete we use splice in order to remove single object from VehiculeService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.toast.error('Delete Successfuly', 'Success!');
        this.refreshTable();
      }
    });
  }


  private refreshTable() {

    this.paginator._changePageSize(this.paginator.pageSize);
  }
  public loadData() {
    this.exampleDatabase = new VehiculeService(this.httpClient);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
      // .debounceTime(150)
      // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class ExampleDataSource extends DataSource<Vehicule> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Vehicule[] = [];
  renderedData: Vehicule[] = [];

  constructor(public _exampleDatabase: VehiculeService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Vehicule[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.getAllVehicules();


    return merge(...displayDataChanges).pipe(map(() => {
        // Filter data
        this.filteredData = this._exampleDatabase.data.slice().filter((vehicule: Vehicule) => {
          const searchStr = (vehicule.id + vehicule.plate + vehicule.fuelType).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });

        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());

        // Grab the page's slice of the filtered sorted data.
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
        return this.renderedData;
      }
    ));
  }

  disconnect() {
  }


  /** Returns a sorted copy of the database data. */
  sortData(data: Vehicule[]): Vehicule[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'id':
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case 'plate':
          [propertyA, propertyB] = [a.plate, b.plate];
          break;
        case 'odometer':
          [propertyA, propertyB] = [a.odometer, b.odometer];
          break;
        case 'fuelType':
          [propertyA, propertyB] = [a.fuelType, b.fuelType];
          break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }

}
