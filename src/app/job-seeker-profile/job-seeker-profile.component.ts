import { Component, OnInit } from '@angular/core';
import { JobSeekerProfileService } from '../job-seeker-profile.service';

@Component({
  selector: 'app-job-seeker-profile',
  templateUrl: './job-seeker-profile.component.html',
  styleUrls: ['./job-seeker-profile.component.scss']
})
export class JobSeekerProfileComponent implements OnInit {
  name: string = '';
  contact: string = '';
  experience: string = '';
  education: string = '';
  skills: string = '';
  status: string = ''; // To track the status

  constructor(private profileService: JobSeekerProfileService) { }

  ngOnInit(): void {
    // Fetch profile details from the API
    this.profileService.getProfile().subscribe((data) => {
      console.log(data);
      this.name = data[0].name;
      this.contact = data[0].contact;
      this.experience = data[0].experience;
      this.education = data[0].education;
      this.skills = data[0].skills;
     // this.status = data.status; // Assuming status is available
    });
  }

  updateProfile(): void {
    const updatedProfile = {
      name: this.name,
      contact: this.contact,
      experience: this.experience,
      education: this.education,
      skills: this.skills
    };

    // Send updated profile to the API
    this.profileService.updateProfile(updatedProfile).subscribe((response) => {
      alert('Profile updated successfully!');
    });
  }
}
