// job-listing.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobListingService {
  private apiUrl = '/api/jobs'; // This will be proxied to the backend API (e.g., localhost:3000/api/jobs)

  constructor(private http: HttpClient) {}

  // Method to fetch job listings
  getJobListings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
