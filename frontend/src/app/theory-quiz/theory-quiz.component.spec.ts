import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryQuizComponent } from './theory-quiz.component';

describe('TheoryQuizComponent', () => {
  let component: TheoryQuizComponent;
  let fixture: ComponentFixture<TheoryQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheoryQuizComponent ]
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
