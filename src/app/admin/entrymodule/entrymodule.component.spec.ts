import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrymoduleComponent } from './entrymodule.component';

describe('EntrymoduleComponent', () => {
  let component: EntrymoduleComponent;
  let fixture: ComponentFixture<EntrymoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrymoduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntrymoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
