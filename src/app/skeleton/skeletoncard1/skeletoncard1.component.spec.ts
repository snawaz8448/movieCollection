import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skeletoncard1Component } from './skeletoncard1.component';

describe('Skeletoncard1Component', () => {
  let component: Skeletoncard1Component;
  let fixture: ComponentFixture<Skeletoncard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skeletoncard1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Skeletoncard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
