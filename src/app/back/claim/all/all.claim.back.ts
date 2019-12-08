import {Component} from '@angular/core';
import {ClaimService} from 'src/app/services/managers/claim.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../../../services/security/storage.service';
import {AlertService} from '../../../services/common/AlerteService';
import {LoginService} from '../../../services/security/login.service';
import {Claim} from '../../../models/Claim';
import {EditClaimBackComponent} from '../editClaim/edit.claim.back.component';

@Component({
  selector: 'app-all-claim-back',
  templateUrl: './all.claim.back.html',
  styleUrls: []
})
export class AllClaimBackComponent {

  allClaims: Claim[];
  tableChecked = new Array;
  claimToEdit: Claim;
  config = {itemsPerPage: 0, currentPage: 0, totalItems: 0};
  collection = {count: 10, data: []};

  constructor(private claimService: ClaimService,
              private storageService: StorageService,
              private alertService: AlertService,
              private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // @ts-ignore
    this.fetchData();
  }

  edit(c: Claim) {
    const modalRef = this.modalService.open(EditClaimBackComponent);
    modalRef.componentInstance.c = c;
  }

  fetchData() {
    // @ts-ignore
    this.claimService.getAllClaims<Claim[]>().subscribe(
      response => {
        this.allClaims = response;
        this.collection.count = response.length;
        for (var i = 0; i < this.collection.count; i++) {
          const cl = this.allClaims.pop();
          this.collection.data.push(
            {
              id: cl.id,
              value: cl
            }
          );
          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.collection.count
          };
        }
      },
      error => {
        console.log('hello error');
        console.log(error);
      }
    );
    console.log(this.collection.data);
  }

  deleteClaim(c: Claim) {
    if (confirm('Are you sure to delete this claim')) {
      this.claimService.deleteClaim(c).subscribe(
        response => {
          this.collection.data.splice(c.id, 1);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  checkbox(item: Claim, n: number) {
    if (this.tableChecked.find(x => x === item)) {
      this.tableChecked.splice(this.tableChecked.indexOf(item), 1);
    } else {
      this.tableChecked.push(item);
    }
  }

  archiverSelectedClaims() {
    if (confirm('Are you sure to delete those claims !!! ')) {
      let tempChecked = [];
      this.tableChecked.forEach(e => tempChecked.push(e));
      for (let i = 0; i < tempChecked.length; i++) {
        let tcv = tempChecked[i];
        let index = this.collection.data.findIndex(item => item.id === tcv.id);
        this.claimService.deleteClaim(tcv).subscribe(
            response => {
            },
            error => {
              console.log(error);
            }
          );
        this.collection.data.splice(index, 1);
        let indexChecked = this.tableChecked.findIndex(item => item.id === tcv.id);
        this.tableChecked.splice(indexChecked, 1);
      }
    }
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
