import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau10Component } from './cau10.component';

describe('Cau10Component', () => {
  let component: Cau10Component;
  let fixture: ComponentFixture<Cau10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cau10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cau10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
