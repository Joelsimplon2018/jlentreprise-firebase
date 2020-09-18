import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireDetailsComponent } from './prestataire-details.component';

describe('PrestataireDetailsComponent', () => {
  let component: PrestataireDetailsComponent;
  let fixture: ComponentFixture<PrestataireDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestataireDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestataireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
