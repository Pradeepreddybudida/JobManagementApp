import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  @Input() job: any;
  constructor() { }

  ngOnInit(): void {
  }
  applyForJob() {
    alert(`You have applied for ${this.job.title} at ${this.job.company}`);
  }

}
