import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  job = {
    title: 'Frontend Developer',
    company: 'Tech Corp',
  };

  submitApplication(form: any) {
    console.log('Application Submitted:', form);
    alert('Application submitted successfully!');
  }

}
