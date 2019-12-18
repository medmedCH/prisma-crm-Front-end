import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RefModalComponent} from '../../add/refModal.component';
import {RepairService} from '../../../../services/managers/repair.service';
import {Repairrequest} from '../../../../models/Repairrequest';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'status-modal',
  templateUrl: './statusModal.component.html',
  styleUrls: []
})
export class StatusModalComponent implements OnInit {

  @Input()
  status;
  id;
  R: Repairrequest;
  addNoteFrom = new FormGroup({
    review: new FormControl('', [Validators.required]),
  });

  constructor(public activeModal: NgbActiveModal, private repairService: RepairService) {
  }

  ngOnInit() {
    console.log(this.status, this.id);
  }

  addRepair() {
    this.R = new Repairrequest(this.addNoteFrom.value.review);
    console.log('zdzadaz', this.R);
    this.repairService.addNote(this.id, this.R)
      .subscribe(
        response => {
        },
        error => {
          console.log(error);
        }
      );
    this.activeModal.close();
  }

}
