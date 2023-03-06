import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau5Component } from './cau5.component';

describe('Cau5Component', () => {
  let component: Cau5Component;
  let fixture: ComponentFixture<Cau5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cau5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cau5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
