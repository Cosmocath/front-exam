import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInfirmiereComponent } from './detail-infirmiere.component';

describe('DetailInfirmiereComponent', () => {
  let component: DetailInfirmiereComponent;
  let fixture: ComponentFixture<DetailInfirmiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailInfirmiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInfirmiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
