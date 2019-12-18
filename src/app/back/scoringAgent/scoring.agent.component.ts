import {Component} from '@angular/core';
import {ClaimService} from 'src/app/services/managers/claim.service';


@Component({
  selector: 'app-scoring-agent',
  templateUrl: './scoring.agent.component.html',
  styleUrls: []
})

export class ScoringAgentComponent {
  listAg: any;

  constructor(private claimService: ClaimService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.claimService.getAllAgents()
      .subscribe(
        response => {
          this.listAg = response;
          console.log(response);
       } ,
        error => {console.log(error); }
      );
      console.log(this.listAg, 'listAg');
  }

}
