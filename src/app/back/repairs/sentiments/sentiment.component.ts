import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Repairrequest} from '../../../models/Repairrequest';
import {RepairService} from '../../../services/managers/repair.service';
import {SentimentResult} from '../../../models/SentimentResult';

@Component({
  selector: 'app-sentiments',
  templateUrl: './sentiment.component.html',
})
export class SentimentComponent implements OnInit {

  @Input()
  review;
  sentimen;


  ngOnInit() {
  }


}
