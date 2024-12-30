import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  private apiUrl = '/api/manageapplications';  // JSON Server API

  constructor(private http: HttpClient) { }

  // Fetch all applications
  getApplications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getApplicationById(applicationId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${applicationId}`);
  }
  // Update the status of a specific application
  // Update the status of a specific application
  updateStatus(applicationId: number, newStatus: string): Observable<any> {
    // Fetch the current application data
    return this.getApplicationById(applicationId).pipe(
      // Once we have the application data, we can update the status
      map(application => {
        const updatedApplication = { 
          ...application,  // Keep all the existing fields (name, job, resume, etc.)
          status: newStatus // Update the status
        };

        // Send the updated application to the server
        return this.http.put<any>(`${this.apiUrl}/${applicationId}`, updatedApplication);
      })
    );
  }
}
