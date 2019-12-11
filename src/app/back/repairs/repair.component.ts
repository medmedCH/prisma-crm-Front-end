import {Component, OnInit} from '@angular/core';
import {RepairService} from '../../services/managers/repair.service';
import {Repairrequest} from '../../models/Repairrequest';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditModalComponent} from './editModal.component';
import {LanguageCode} from '../../models/LanguageCode';
import {SentimentResult} from '../../models/SentimentResult';
import {AzureSentiment} from '../../services/managers/AzureSentiment';
import {debounceTime} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {forEach} from '@angular/router/src/utils/collection';
import {SentimentComponent} from './sentiments/sentiment.component';

@Component({
  selector: 'app-repairrequest',
  templateUrl: './repair.component.html',
})
export class RepairComponent implements OnInit {
  title = 'Repair Request';
  focus: any;
  allRepairs: Repairrequest[];
  repair: Repairrequest;
  score: number;

  constructor(private repairService: RepairService, private modalService: NgbModal, private azureSentiment: AzureSentiment) {
  }

  ngOnInit(): void {
    this.fetchData();

  }

  fetchData() {

    // @ts-ignore
    this.repairService.getAllRepairs<Repairrequest[]>().subscribe(
      response => {
        this.allRepairs = response;
      },
      error => {
        console.log(error);
      }
    );

  }



  deleteRep(u: Repairrequest) {
    if (confirm('Are you sure to delete this repair request')) {
      this.repairService.deleteRep(u).subscribe(
        response => {
          this.allRepairs.splice(u.id, 1);
        },
        error => {
          console.log(error);
        }
      );
      this.fetchData();
    }
  }

  getRepair(u: Repairrequest) {
    const modaledit = this.modalService.open(EditModalComponent);
    modaledit.componentInstance.repair = u;
  }

  clientSatisfaction(review: string) {
    const reviewModal = this.modalService.open(SentimentComponent);
    this.azureSentiment.analize(review).subscribe((sentiments: SentimentResult) => {
      reviewModal.componentInstance.sentimen = sentiments.documents[0].score;
      reviewModal.componentInstance.review = review;
    });
  }
}
