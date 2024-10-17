import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtemplateComponent } from './searchtemplate.component';

describe('SearchtemplateComponent', () => {
  let component: SearchtemplateComponent;
  let fixture: ComponentFixture<SearchtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchtemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
