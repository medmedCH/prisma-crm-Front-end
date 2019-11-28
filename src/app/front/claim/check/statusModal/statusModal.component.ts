import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'status-modal',
  templateUrl: './statusModal.component.html',
  styleUrls: []
})
export class StatusModalComponent implements OnInit {

  @Input()
  status = '';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.status);
  }

}
