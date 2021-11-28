import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRecordComponent } from './driver-record.component';

describe('DriverRecordComponent', () => {
  let component: DriverRecordComponent;
  let fixture: ComponentFixture<DriverRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
