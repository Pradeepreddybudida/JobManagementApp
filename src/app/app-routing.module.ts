import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Import HomeComponent
import { JobSeekerProfileComponent } from './job-seeker-profile/job-seeker-profile.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { StatusTrackingComponent } from './status-tracking/status-tracking.component';
import { JobListingsComponent } from './job-listings/job-listings.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'job-seeker-profile', component: JobSeekerProfileComponent },
  { path: 'employer-dashboard', component: EmployerDashboardComponent },
  { path: 'track-status', component: StatusTrackingComponent },
  { path: 'job-listings', component: JobListingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
