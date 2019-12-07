import {Component} from '@angular/core';
import {ClaimService} from 'src/app/services/managers/claim.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {StorageService} from '../../../services/security/storage.service';
import {AlertService} from '../../../services/common/AlerteService';
import {LoginService} from '../../../services/security/login.service';
import {Claim} from '../../../models/Claim';
import {EditClaimBackComponent} from '../edit/edit.claim.back.component';

@Component({
  selector: 'app-all-claim-back',
  templateUrl: './all.claim.back.html',
  styleUrls: []
})
export class AllClaimBackComponent {

  allClaims: Claim[];
  tableChecked = new Array;
  claimToEdit: Claim;
  config: {} = {itemsPerPage: 0, currentPage: 0, totalItem: 0};
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
        console.log('hello faq');
        this.allClaims = response;
        this.collection.count = response.length;
        console.log(this.collection.count);
        for (var i = 0; i < this.collection.count; i++) {
          this.collection.data.push(
            {
              value: this.allClaims.pop()
            }
          );
          this.config = {
            itemsPerPage: 10,
            currentPage: 1,
            totalItems: this.collection.count
          };
        }
        console.log(this.collection.data);

      },
      error => {
        console.log('hello error');
        console.log(error);
      }
    );
  }

  deleteClaim(c: Claim) {
    if (confirm('Are you sure to delete this claim')) {
      this.claimService.deleteClaim(c).subscribe(
        response => {
          this.allClaims.splice(c.id, 1);
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

  deleteSelectedClaims() {
    if (confirm('Are you sure to delete those claims !!! ')) {
      console.log(this.tableChecked);
      this.tableChecked.forEach(x => {
        this.claimService.deleteClaim(x).subscribe(
          response => {
            console.log(this.tableChecked.indexOf(x));
            this.allClaims.splice(this.tableChecked.indexOf(x), 1);
            this.tableChecked.splice(this.tableChecked.indexOf(x), 1);
          },
          error => {
            console.log(error);
          }
        );
      });
    }
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
