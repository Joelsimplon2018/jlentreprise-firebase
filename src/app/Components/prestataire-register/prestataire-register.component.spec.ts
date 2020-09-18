import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireRegisterComponent } from './prestataire-register.component';

describe('PrestataireRegisterComponent', () => {
  let component: PrestataireRegisterComponent;
  let fixture: ComponentFixture<PrestataireRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestataireRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestataireRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
