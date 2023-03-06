import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau4Component } from './cau4.component';

describe('Cau4Component', () => {
  let component: Cau4Component;
  let fixture: ComponentFixture<Cau4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cau4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cau4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
