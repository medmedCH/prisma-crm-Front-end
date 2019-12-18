import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VehiculeService} from '../../../../services/managers/vehicule.service';
import {UsersService} from '../../../../services/managers/users.service';
import {User} from '../../../../models/User';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-assign.dialog',
  templateUrl: '../../dialogs/assignD/assignD.dialog.html',
  styleUrls: ['../../dialogs/assignD/assignD.dialog.css']
})
export class AssignDDialogComponent implements OnInit {
  public x: any;

  constructor(public dialogRef: MatDialogRef<AssignDDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: VehiculeService, public userservice: UsersService) {
  }

  editForm = new FormGroup({
    id : new FormControl('', [Validators.required]),

  });


  submit() {
    console.log(this.data.idd, this.data.idv),
      this.dataService.assignD(this.data.idd, this.data.idv);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.dataService.assignD(this.data.idd, this.data.idv);
  }

  ngOnInit() {
    this.userservice.getAllUsers().subscribe(
      response => {
        this.x = response;
        console.log(response);
      }
    );
    console.log(this.x);
  }


}
