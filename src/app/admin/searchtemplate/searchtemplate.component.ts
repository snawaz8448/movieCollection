import { Component } from '@angular/core';
import { MovielistContainerComponent } from "../../movielist-container/movielist-container.component";

@Component({
  selector: 'app-searchtemplate',
  standalone: true,
  imports: [MovielistContainerComponent],
  templateUrl: './searchtemplate.component.html',
  styleUrl: './searchtemplate.component.scss'
})
export class SearchtemplateComponent {

}
