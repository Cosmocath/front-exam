import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneInfirmiereComponent } from './one-infirmiere.component';

describe('OneInfirmiereComponent', () => {
  let component: OneInfirmiereComponent;
  let fixture: ComponentFixture<OneInfirmiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneInfirmiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneInfirmiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
