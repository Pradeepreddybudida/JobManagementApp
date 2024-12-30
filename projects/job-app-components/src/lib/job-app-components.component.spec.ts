import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAppComponentsComponent } from './job-app-components.component';

describe('JobAppComponentsComponent', () => {
  let component: JobAppComponentsComponent;
  let fixture: ComponentFixture<JobAppComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAppComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAppComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
