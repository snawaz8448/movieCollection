import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-watchmovie-dialog',
  standalone: true,
  imports: [DragDropModule ,CommonModule ,MatTooltipModule],
  templateUrl: './watchmovie-dialog.component.html',
  styleUrl: './watchmovie-dialog.component.scss'
})
export class WatchmovieDialogComponent {
  
  isFavorite:boolean=false

  constructor(
    public dialogRef: MatDialogRef<WatchmovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }


  favoriteButton(){
    this.isFavorite= !this.isFavorite

  }

}
