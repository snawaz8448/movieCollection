import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HometemplateComponent } from './hometemplate.component';

describe('HometemplateComponent', () => {
  let component: HometemplateComponent;
  let fixture: ComponentFixture<HometemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HometemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HometemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
