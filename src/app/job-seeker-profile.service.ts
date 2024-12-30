import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerProfileService {
  private apiUrl = '/api/profiles'; // Modify with your backend API endpoint

  constructor(private http: HttpClient) { }

  // Fetch profile data
  getProfile(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Update profile data
  updateProfile(profileData: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, profileData);
  }
}
