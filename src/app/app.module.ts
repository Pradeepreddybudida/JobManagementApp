import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { JobSeekerProfileComponent } from './job-seeker-profile/job-seeker-profile.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { StatusTrackingComponent } from './status-tracking/status-tracking.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { JobAppComponentsModule } from 'projects/job-app-components/src/public-api';
import { JobCardComponent } from 'projects/job-app-components/src/lib/JobAppComponents/job-card/job-card.component';

@NgModule({
  declarations: [
    AppComponent,
    JobListingsComponent,
    JobSeekerProfileComponent,
    EmployerDashboardComponent,
    ApplicationFormComponent,
    StatusTrackingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    JobAppComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
