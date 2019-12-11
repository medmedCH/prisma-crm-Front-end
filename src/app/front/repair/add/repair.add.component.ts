import {Component, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StatusModalComponent} from '../check/statusModal/statusModal.component';
import {StorageService} from '../../../services/security/storage.service';
import {AlertService} from '../../../services/common/AlerteService';
import {RepairService} from '../../../services/managers/repair.service';
import {Claim} from '../../../models/Claim';
import {Repairrequest} from '../../../models/Repairrequest';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RefModalComponent} from './refModal.component';

@Component({
  selector: 'app-repair-add',
  templateUrl: './repair.add.html',
  styleUrls: []
})
export class AddRepairComponent {

  title = 'Consul Repair';
  r: Repairrequest;

  ref;

  constructor(private repairService: RepairService,
              private storageService: StorageService,
              private alertService: AlertService,
              private router: Router, private modalService: NgbModal) {
  }

  addRepairFrom = new FormGroup({
    idinv: new FormControl('', [Validators.required]),
    idprod: new FormControl('', [Validators.required]),
  });
  focus: false;
  focus1: false;

  addRepair() {
    if (null !== StorageService.get('currentUser')) {
      const currentUser = StorageService.get('currentUser');
      // tslint:disable-next-line:max-line-length
      this.r = new Repairrequest(this.addRepairFrom.value.notes);
      this.repairService.addRepair(this.r, this.addRepairFrom.value.idinv, this.addRepairFrom.value.idprod)
        .subscribe(
          response => {
            // tslint:disable-next-line:no-unused-expression
            this.ref = response;
            const modalRef = this.modalService.open(RefModalComponent);
            modalRef.componentInstance.ref = this.ref;
          },
          error => {
            const modalRef = this.modalService.open(RefModalComponent);
            modalRef.componentInstance.ref = 'Code invalide';
          }
        );
    } else {
      this.router.navigate(['/login']);
      this.alertService.error('Vous devez se connecter d\'abord');
    }

  }

}
