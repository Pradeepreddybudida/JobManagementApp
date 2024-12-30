import { Component, OnInit } from '@angular/core';
import { StatusTrackingService } from '../status-tracking.service';

@Component({
  selector: 'app-status-tracking',
  templateUrl: './status-tracking.component.html',
  styleUrls: ['./status-tracking.component.scss']
})
export class StatusTrackingComponent implements OnInit {

  
  applications: any[] = [];  // Will hold the application data

  constructor(private statusTrackingService: StatusTrackingService) { }

  ngOnInit(): void {
    // Fetch the applications on component initialization
    this.statusTrackingService.getApplications().subscribe(
      (data) => {
        this.applications = data;
      },
      (error) => {
        console.error('Error fetching applications data', error);
      }
    );
  }

}
