import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchmovieDialogComponent } from './watchmovie-dialog.component';

describe('WatchmovieDialogComponent', () => {
  let component: WatchmovieDialogComponent;
  let fixture: ComponentFixture<WatchmovieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchmovieDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchmovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
