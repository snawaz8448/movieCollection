import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistContainerComponent } from './movielist-container.component';

describe('MovielistContainerComponent', () => {
  let component: MovielistContainerComponent;
  let fixture: ComponentFixture<MovielistContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovielistContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovielistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
