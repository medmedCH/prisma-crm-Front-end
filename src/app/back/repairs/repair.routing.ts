import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RepairComponent} from './repair.component';
import {SentimentComponent} from './sentiments/sentiment.component';

const routes: Routes = [
  {path: '', component: RepairComponent},
  {path: 'sentiment', component: SentimentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepairRouting {
}
