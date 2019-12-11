import {Component, Input, OnInit} from '@angular/core';
import {PackService} from '../../../services/managers/pack.service';
import {Pack} from '../../../models/Pack';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-show',
  templateUrl: './detail.html'
})

// tslint:disable-next-line:component-class-suffix
export class NgbdModalContent {
  @Input() prd;

  constructor(public activeModal: NgbActiveModal) {
  }
}




/*
<------------------------------------------->
*/
@Component({
  selector: 'app-pacs',
  templateUrl: './pacs.component.html',
  styleUrls: ['./pacs.component.scss']
})
export class PacsComponent implements OnInit {
  pa: Pack[] = [];
  prd;
  constructor(private packservice: PackService, private modalService: NgbModal) { }

  ngOnInit() {
    this.packservice.getPack().subscribe(data => this.pa = data);
  }
  open(id: number) {
    const modalRef = this.modalService.open(NgbdModalContent);
    this.packservice.getPackprdd(id).subscribe(data => {
      this.prd = data;
      console.log('data = ');
      console.log(data);
      modalRef.componentInstance.prd = data;
    });
  }
}
