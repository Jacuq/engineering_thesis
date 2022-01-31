import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TheoryApiService } from '../theory-api/theory-api.service';

import { EarTrainingComponent } from './ear-training.component';

describe('EarTrainingComponent', () => {
  let component: EarTrainingComponent;
  let fixture: ComponentFixture<EarTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarTrainingComponent ],
      imports: [HttpClientModule, FormsModule],
      providers: [TheoryApiService]
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
