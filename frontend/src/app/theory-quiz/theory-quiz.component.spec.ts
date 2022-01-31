import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TheoryApiService } from '../theory-api/theory-api.service';

import { TheoryQuizComponent } from './theory-quiz.component';

describe('TheoryQuizComponent', () => {
  let component: TheoryQuizComponent;
  let fixture: ComponentFixture<TheoryQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheoryQuizComponent ],
      imports: [HttpClientModule, FormsModule],
      providers: [TheoryApiService]
    })
    
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
