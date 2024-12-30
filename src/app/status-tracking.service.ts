import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusTrackingService {
  private apiUrl = '/api/applications'; // Use the appropriate URL for your API

  constructor(private http: HttpClient) { }

  // Method to get the applications data
  getApplications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
