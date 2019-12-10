import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Repairrequest} from '../../../models/Repairrequest';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ref-modal',
  templateUrl: './refModal.component.html',
  styleUrls: []
})
export class RefModalComponent implements OnInit {

  @Input()
  ref: Repairrequest;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    console.log(this.ref);
  }

}
