import {Component} from "@angular/core";
import {ClaimService} from 'src/app/services/managers/claim.service';
import { Agent } from "http";


@Component({
  selector: 'app-scoring-agent',
  templateUrl: './scoring.agent.component.html',
  styleUrls: []
})

export class ScoringAgentComponent {
  listAg: any;

  constructor(private claimService: ClaimService) {
  }

  ngOnInit() {
    this.claimService.getAllAgents()
      .subscribe(
        response => {
          console.log("hey");
          this.listAg = response;
          console.log(response);
       } ,
        error => {console.log(error); }
      );
      console.log(this.listAg, 'listAg');
  }

}
