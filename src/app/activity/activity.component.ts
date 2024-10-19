import { Component } from '@angular/core';
import { FavoriteListComponent } from "../admin/favorite-list/favorite-list.component";

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [FavoriteListComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {

}
