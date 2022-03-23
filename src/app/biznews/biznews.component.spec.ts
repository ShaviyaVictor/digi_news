import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiznewsComponent } from './biznews.component';

describe('BiznewsComponent', () => {
  let component: BiznewsComponent;
  let fixture: ComponentFixture<BiznewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiznewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiznewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
