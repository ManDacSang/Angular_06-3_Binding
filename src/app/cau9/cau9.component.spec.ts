import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau9Component } from './cau9.component';

describe('Cau9Component', () => {
  let component: Cau9Component;
  let fixture: ComponentFixture<Cau9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cau9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cau9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
