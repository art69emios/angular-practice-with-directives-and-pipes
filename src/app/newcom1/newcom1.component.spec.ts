import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newcom1Component } from './newcom1.component';

describe('Newcom1Component', () => {
  let component: Newcom1Component;
  let fixture: ComponentFixture<Newcom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newcom1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newcom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
