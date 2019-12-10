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
  styleUrls: ['./all.claim.back.css']
})
export class AllClaimBackComponent {

  loggedUserId = StorageService.get('currentUser').userId;
  loggedUserRole = StorageService.get('currentUser').role;

  allClaims: Claim[];
  tableChecked = new Array;
  claimToEdit: Claim;
  config = {itemsPerPage: 0, currentPage: 0, totalItems: 0};
  configEnCours = {itemsPerPage: 0, currentPage: 0, totalItems: 0};
  configEnAttente = {itemsPerPage: 0, currentPage: 0, totalItems: 0};
  configFermee = {itemsPerPage: 0, currentPage: 0, totalItems: 0};
  configConfirmed = {itemsPerPage: 0, currentPage: 0, totalItems: 0};
  configResolu = {itemsPerPage: 0, currentPage: 0, totalItems: 0};

  collection = {
    count: 10,
    data: [],
    dataEnCours: [],
    dataEnAttente: [],
    dataFermee: [],
    dataConfirmed: [],
    dataResolu: []
  };

  constructor(private claimService: ClaimService,
              private storageService: StorageService,
              private alertService: AlertService,
              private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
    console.log(this.route.snapshot.data);
    this.allClaims = this.route.snapshot.data['listClaim'];
  }

  // tslint:disable-next-line:use-life-cycle-interface use-lifecycle-interface
  ngOnInit() {
    // @ts-ignore
    this.fetchData();
  }

  fetchData() {
    this.collection.count = this.allClaims.length;
    for (let i = 0; i < this.collection.count; i++) {
        const cl = this.allClaims.pop();

        this.collection.data.push(
          {
            id: cl.id,
            value: cl
          }
        );
        if (cl.status === 'EN_ATTENTE') {
          this.collection.dataEnAttente.push(
            {
              id: cl.id,
              value: cl
            }
          );
        }
        if (cl.status === 'RESOLU') {
          this.collection.dataResolu.push(
            {
              id: cl.id,
              value: cl
            }
          );
        }
        if (cl.status === 'EN_COURS') {
          this.collection.dataEnCours.push(
            {
              id: cl.id,
              value: cl
            }
          );
        }
        if (cl.status === 'FERME_SANS_SOLUTION') {
          this.collection.dataFermee.push(
            {
              id: cl.id,
              value: cl
            }
          );
        }
        if (cl.status === 'CONFIRMEE') {
          this.collection.dataConfirmed.push(
            {
              id: cl.id,
              value: cl
            }
          );
        }

        this.config = {
          itemsPerPage: 5,
          currentPage: 1,
          totalItems: this.collection.count
        };
        this.configEnCours = {
          itemsPerPage: 5,
          currentPage: 1,
          totalItems: this.collection.dataEnCours.length
        };
        this.configEnAttente = {
          itemsPerPage: 5,
          currentPage: 1,
          totalItems: this.collection.dataEnAttente.length
        };
        this.configConfirmed = {
          itemsPerPage: 5,
          currentPage: 1,
          totalItems: this.collection.dataConfirmed.length
        };
        this.configFermee = {
          itemsPerPage: 5,
          currentPage: 1,
          totalItems: this.collection.dataFermee.length
        };
        this.configResolu = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.collection.dataResolu.length
      };
    }
  }

  edit(c: Claim) {
    const modalRef = this.modalService.open(EditClaimBackComponent);
    modalRef.componentInstance.c = c;
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
      console.log(this.tableChecked);
    } else {
      this.tableChecked.push(item);
      console.log(this.tableChecked);
    }
  }

  deleteSelectedClaims() {
    if (confirm('Are you sure to delete those claims !!! ')) {
      const tempChecked = [];
      this.tableChecked.forEach(e => tempChecked.push(e));
      for (let i = 0; i < tempChecked.length; i++) {
        const tcv = tempChecked[i];
        const index = this.collection.data.findIndex(item => item.id === tcv.id);
        this.claimService.deleteClaim(tcv).subscribe(
            response => {
            },
            error => {
              console.log(error);
            }
          );
        this.collection.data.splice(index, 1);
        const indexChecked = this.tableChecked.findIndex(item => item.id === tcv.id);
        this.tableChecked.splice(indexChecked, 1);
      }
      tempChecked.forEach(obj => {
        obj.checked = false;
      });
    }
  }

  archiverSelectedClaims() {
    if (confirm('Are you sure to archive those claims !!! ')) {
      const tempChecked = [];
      this.tableChecked.forEach(e => tempChecked.push(e));
      for (let i = 0; i < tempChecked.length; i++) {
        const tcv = tempChecked[i];
        const index = this.collection.data.findIndex(item => item.id === tcv.id);
        this.claimService.archiverClaim(tcv).subscribe(
            response => {
            },
            error => {
              console.log(error);
            }
          );
        this.collection.dataEnCours.splice(index, 1);
        this.collection.dataEnAttente.splice(index, 1);
        this.collection.dataResolu.splice(index, 1);
        const indexChecked = this.tableChecked.findIndex(item => item.id === tcv.id);
        this.tableChecked.splice(indexChecked, 1);
      }
      tempChecked.forEach(obj => {
        obj.checked = false;
        obj.status = 'FERME_SANS_SOLUTION';
      });
    }
  }
  desarchiverSelectedClaims() {
    if (confirm('Are you sure to archive those claims !!! ')) {
      const tempChecked = [];
      // selectionner que les réclamation FERME_SANS_SOLUTION
      this.tableChecked.forEach(e => {
        if (e.status === 'FERME_SANS_SOLUTION') { tempChecked.push(e); }
      });
      for (let i = 0; i < tempChecked.length; i++) {
        const tcv = tempChecked[i];
        const index = this.collection.dataFermee.findIndex(item => item.id === tcv.id);
        this.claimService.desarchiverClaim(tcv).subscribe(
            response => {
            },
            error => {
              console.log(error);
            }
          );
        this.collection.dataFermee.splice(index, 1);
        const indexChecked = this.tableChecked.findIndex(item => item.id === tcv.id);
        this.tableChecked.splice(indexChecked, 1);
      }
      tempChecked.forEach(obj => {
        obj.checked = false;
        obj.status = 'EN_COURS';
      });
    }
  }


  pageChanged(event) {
    this.config.currentPage = event;
  }
  pageChangedEnCours(event) {
    this.configEnCours.currentPage = event;
  }
  pageChangedEnAttente(event) {
    this.configEnAttente.currentPage = event;
  }
  pageChangedResolu(event) {
    this.configResolu.currentPage = event;
  }
  pageChangedFermee(event) {
    this.configFermee.currentPage = event;
  }
  pageChangedConfirmed(event) {
    this.configConfirmed.currentPage = event;
  }

  confirmer(c: Claim) {
    this.claimService.confirmerClaim(c).subscribe(
      response => {
          const index = this.collection.dataResolu.findIndex(item => item.id === c.id);
          this.collection.dataResolu.splice(index, 1);
          console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
