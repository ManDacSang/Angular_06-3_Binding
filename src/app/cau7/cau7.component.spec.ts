import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau7Component } from './cau7.component';

describe('Cau7Component', () => {
  let component: Cau7Component;
  let fixture: ComponentFixture<Cau7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cau7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cau7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
