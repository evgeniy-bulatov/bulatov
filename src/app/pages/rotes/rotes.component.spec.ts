import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotesComponent } from './rotes.component';

describe('RotesComponent', () => {
  let component: RotesComponent;
  let fixture: ComponentFixture<RotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
