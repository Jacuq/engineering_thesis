import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarTrainingComponent } from './ear-training.component';

describe('EarTrainingComponent', () => {
  let component: EarTrainingComponent;
  let fixture: ComponentFixture<EarTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
