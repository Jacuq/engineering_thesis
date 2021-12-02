import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarPageComponent } from './guitar-page.component';

describe('GuitarPageComponent', () => {
  let component: GuitarPageComponent;
  let fixture: ComponentFixture<GuitarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
