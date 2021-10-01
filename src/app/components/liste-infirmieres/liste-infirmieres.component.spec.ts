import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInfirmieresComponent } from './liste-infirmieres.component';

describe('ListeInfirmieresComponent', () => {
  let component: ListeInfirmieresComponent;
  let fixture: ComponentFixture<ListeInfirmieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeInfirmieresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInfirmieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
