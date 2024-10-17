import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSerialComponent } from './latest-serial.component';

describe('LatestSerialComponent', () => {
  let component: LatestSerialComponent;
  let fixture: ComponentFixture<LatestSerialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestSerialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestSerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
