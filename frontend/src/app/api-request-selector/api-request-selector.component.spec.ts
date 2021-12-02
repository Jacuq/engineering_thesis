import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRequestSelectorComponent } from './api-request-selector.component';

describe('ApiRequestSelectorComponent', () => {
  let component: ApiRequestSelectorComponent;
  let fixture: ComponentFixture<ApiRequestSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiRequestSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiRequestSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
