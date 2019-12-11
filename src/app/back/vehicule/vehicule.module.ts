import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../../services/security/storage.service';
import {VehiculeRouting} from './vehicule.routing';
import {VehiculeComponent} from './vehicule.component';
import {DashboardLayoutModule} from '../dashboardLayout/dashboard.layout.module';
import {VehiculeService} from '../../services/managers/vehicule.service';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {AddDialogComponent} from './dialogs/add/add.dialog.component';
import {EditDialogComponent} from './dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';
import {MaintenanceComponent} from './Maintaince/maintenance.component';
import {MaintenanceService} from '../../services/managers/maintenance.service';
import {FullCalendarModule} from '@fullcalendar/angular';
import {MaintainceResolver} from '../../services/resolvers/maintainceResolver';
import {AssignDDialogComponent} from './dialogs/assignD/assignD.dialog.component';
import {UsersService} from '../../services/managers/users.service';

@NgModule({
  imports: [
    VehiculeRouting,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    DashboardLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    FullCalendarModule,
  ],
  declarations: [
    VehiculeComponent,
    MaintenanceComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AssignDDialogComponent
  ],
  providers: [VehiculeService, StorageService, MaintenanceService , UsersService],
  entryComponents: [AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AssignDDialogComponent
  ],
})
export class VehiculeModule {
}
