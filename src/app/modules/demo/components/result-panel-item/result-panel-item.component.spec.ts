import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPanelItemComponent } from './result-panel-item.component';

describe('ResultPanelItemComponent', () => {
  let component: ResultPanelItemComponent;
  let fixture: ComponentFixture<ResultPanelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultPanelItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
