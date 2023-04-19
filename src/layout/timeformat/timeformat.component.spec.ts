import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeformatComponent } from './timeformat.component';

describe('TimeformatComponent', () => {
  let component: TimeformatComponent;
  let fixture: ComponentFixture<TimeformatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeformatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
