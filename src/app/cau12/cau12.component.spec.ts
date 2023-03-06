import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau12Component } from './cau12.component';

describe('Cau12Component', () => {
  let component: Cau12Component;
  let fixture: ComponentFixture<Cau12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cau12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cau12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
