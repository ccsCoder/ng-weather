import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemparatureIndicatorComponent } from './temparature-indicator.component';

describe('TemparatureIndicatorComponent', () => {
  let component: TemparatureIndicatorComponent;
  let fixture: ComponentFixture<TemparatureIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemparatureIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemparatureIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
