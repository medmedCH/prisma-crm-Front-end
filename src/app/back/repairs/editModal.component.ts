import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Repairrequest} from '../../models/Repairrequest';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RepairService} from '../../services/managers/repair.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'edit-modal',
  templateUrl: './editModal.component.html',
  styleUrls: []
})
export class EditModalComponent implements OnInit {

  @Input()
  repair: Repairrequest;


  constructor(public activeModal: NgbActiveModal, private repairService: RepairService) {
  }

  editForm = new FormGroup({
    statusRep: new FormControl('', [Validators.required]),
    notes: new FormControl('', [Validators.required]),

  });

  ngOnInit() {
    this.editForm.get('statusRep').setValue(this.repair.statusRep);
    this.editForm.get('notes').setValue(this.repair.notes);


  }
  edit() {
    this.repair.statusRep = this.editForm.value.statusRep;
    this.repair.notes = this.editForm.value.notes;
    this.repairService.editRepair(this.repair).subscribe
    (
      response => {
        console.log('edit sucessfullaaay');
      },
      error => {
        console.log(error);
      }
    );
    this.activeModal.close();
  }
}
