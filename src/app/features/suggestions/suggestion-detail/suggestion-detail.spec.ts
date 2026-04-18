import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionDetail } from './suggestion-detail';

describe('SuggestionDetail', () => {
  let component: SuggestionDetail;
  let fixture: ComponentFixture<SuggestionDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuggestionDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(SuggestionDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
