import {Component} from '@angular/core';
import {RepairService} from 'src/app/services/managers/repair.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StatusModalComponent} from './statusModal/statusModal.component';

@Component({
  selector: 'app-repair-check',
  templateUrl: './repair.check.html',
  styleUrls: ['./repair.check.scss']
})
export class CheckRepairComponent {

  title = 'Consul Repair';
  status;
  id;
  constructor(private repairService: RepairService, private router: Router, private modalService: NgbModal) {
  }

  getStatusFrom = new FormGroup({
    repairCode: new FormControl('', [Validators.required]),
  });


  getRepairStatus() {
    this.repairService.getRepId(this.getStatusFrom.value.repairCode)
      .subscribe(
        response => {
          this.status = response['statusRep'];
          this.id = response['id'];
          const modalRef = this.modalService.open(StatusModalComponent);
          modalRef.componentInstance.status = this.status;
          modalRef.componentInstance.id = this.id;

        },
        error => {
          const modalRef = this.modalService.open(StatusModalComponent);
          modalRef.componentInstance.status = 'Code invalide';
        }
      );
  }
}
