import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFactComponent } from './submit-fact.component';

describe('SubmitFactComponent', () => {
  let component: SubmitFactComponent;
  let fixture: ComponentFixture<SubmitFactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
