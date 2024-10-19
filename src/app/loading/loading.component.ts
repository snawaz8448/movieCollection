import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  constructor( private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cd.detectChanges();
  }
  
}

