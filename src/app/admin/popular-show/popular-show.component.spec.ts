import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularShowComponent } from './popular-show.component';

describe('PopularShowComponent', () => {
  let component: PopularShowComponent;
  let fixture: ComponentFixture<PopularShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
