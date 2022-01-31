import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TheoryApiService } from '../theory-api/theory-api.service';

import { GuitarPageComponent } from './guitar-page.component';

describe('GuitarPageComponent', () => {
  let component: GuitarPageComponent;
  let fixture: ComponentFixture<GuitarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarPageComponent],
      imports: [HttpClientModule, FormsModule, ActivatedRoute],
      providers: [TheoryApiService]
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
