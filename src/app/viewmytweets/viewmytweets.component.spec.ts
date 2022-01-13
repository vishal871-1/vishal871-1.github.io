import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmytweetsComponent } from './viewmytweets.component';

describe('ViewmytweetsComponent', () => {
  let component: ViewmytweetsComponent;
  let fixture: ComponentFixture<ViewmytweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmytweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmytweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
