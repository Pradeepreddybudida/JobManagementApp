import { Component, OnInit } from '@angular/core';
import { JobCardComponent } from 'projects/job-app-components/src/lib/JobAppComponents/job-card/job-card.component';
import { JobListingService } from '../job-listings.service';
@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.scss'],


})
export class JobListingsComponent implements OnInit {

  jobs = []; // Declare jobs array to hold the job listings

  constructor(private jobListingService: JobListingService) { } // Inject the JobListingService

  ngOnInit(): void {
    // Call the service method to get job listings when the component initializes
    this.jobListingService.getJobListings().subscribe(
      (data) => {
        this.jobs = data; // Assign the fetched data to the jobs array
      },
      (error) => {
        console.error('Error fetching job listings:', error); // Handle errors
      }
    );
  }
}
