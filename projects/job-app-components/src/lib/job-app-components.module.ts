import { NgModule } from '@angular/core';
import { JobAppComponentsComponent } from './job-app-components.component';
import { JobCardComponent } from './JobAppComponents/job-card/job-card.component';
import { ApplicationFormComponent } from './JobAppComponents/application-form/application-form.component';
import { EmployerDashboardComponent } from './JobAppComponents/employer-dashboard/employer-dashboard.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [JobAppComponentsComponent, JobCardComponent, ApplicationFormComponent, EmployerDashboardComponent],
  imports: [CommonModule
  ],
  exports: [JobAppComponentsComponent, JobCardComponent]
})
export class JobAppComponentsModule { }
