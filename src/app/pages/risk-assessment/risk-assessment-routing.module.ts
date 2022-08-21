import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiskAssessmentComponent } from './risk-assessment.component';

const routes: Routes = [{ path: '', component: RiskAssessmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiskAssessmentRoutingModule { }
