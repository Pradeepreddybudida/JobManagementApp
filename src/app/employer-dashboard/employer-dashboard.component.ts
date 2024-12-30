import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.scss']
})
export class EmployerDashboardComponent implements OnInit {

  applications: any[] = [];

  constructor(private employerService: EmployerService) { }

  ngOnInit(): void {
    this.fetchApplications();
  }

  // Fetch applications from the API
  fetchApplications(): void {
    this.employerService.getApplications().subscribe((data) => {
      this.applications = data;
    });
  }

  // Update application status
  updateStatus(application: any, newStatus: string): void {
    this.employerService.updateStatus(application.id, newStatus).subscribe(() => {
      application.status = newStatus;  // Update the UI immediately
      alert(`Application status updated to ${newStatus}`);
    });
  }
}
