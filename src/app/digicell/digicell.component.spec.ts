import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigicellComponent } from './digicell.component';

describe('DigicellComponent', () => {
  let component: DigicellComponent;
  let fixture: ComponentFixture<DigicellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigicellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigicellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
