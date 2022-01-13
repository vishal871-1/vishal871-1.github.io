import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalltweetsComponent } from './viewalltweets.component';

describe('ViewalltweetsComponent', () => {
  let component: ViewalltweetsComponent;
  let fixture: ComponentFixture<ViewalltweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewalltweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalltweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
