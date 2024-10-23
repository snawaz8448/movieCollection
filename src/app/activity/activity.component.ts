import { Component, Inject } from '@angular/core';
import { FavoriteListComponent } from "../admin/favorite-list/favorite-list.component";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [FavoriteListComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {


  constructor(
    public dialogRef: MatDialogRef<ActivityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {

    }
  






}
