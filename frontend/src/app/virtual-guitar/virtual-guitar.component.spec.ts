import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualGuitarComponent } from './virtual-guitar.component';

describe('VirtualGuitarComponent', () => {
  let component: VirtualGuitarComponent;
  let fixture: ComponentFixture<VirtualGuitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualGuitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualGuitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
