import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newcom3Component } from './newcom3.component';

describe('Newcom3Component', () => {
  let component: Newcom3Component;
  let fixture: ComponentFixture<Newcom3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newcom3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newcom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
