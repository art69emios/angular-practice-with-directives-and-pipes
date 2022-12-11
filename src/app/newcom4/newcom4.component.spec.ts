import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newcom4Component } from './newcom4.component';

describe('Newcom4Component', () => {
  let component: Newcom4Component;
  let fixture: ComponentFixture<Newcom4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newcom4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newcom4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
