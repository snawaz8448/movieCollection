import { Component, Input, input, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { WatchmovieDialogComponent } from '../watchmovie-dialog/watchmovie-dialog.component';
import { Skeletoncard1Component } from "../skeleton/skeletoncard1/skeletoncard1.component";
import { MoviesService } from '../admin/services/movies.service';
import { Subscription } from 'rxjs';
import { Movie } from '../commonInterface';

@Component({
  selector: 'app-movielist-container',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, Skeletoncard1Component],
  templateUrl: './movielist-container.component.html',
  styleUrl: './movielist-container.component.scss'
})
export class MovielistContainerComponent {

   skeletonMovie = new Array(20).fill(1);
   @Input() isMovieLoaded: boolean = false;
   @Input() Movies:any[]=[];
   private movieEventSubscription!: Subscription;

   ngOnChanges(changes: SimpleChanges): void {

     if (changes['isMovieLoaded']) {
       console.log('isMovieLoaded changed:', changes['isMovieLoaded'].currentValue);
     }
   }

    constructor(public dialog: MatDialog ,private movieService:MoviesService){
    }

    ngOnInit(){
    this.movieEventSubscription = this.movieService.getMovieEventEmitter()
    .subscribe(data => {
      this.isMovieLoaded = data;
      console.log('Event received:', data);
    });
    }

    openWatchMovieDialog(url:string , description:string  , id:any){
        const dialogRef = this.dialog.open(WatchmovieDialogComponent, {
            width: '50vw', 
            height: '70vh', 
            data:{url:url , description:description , id:id},
            minWidth:'600px',
            panelClass: 'mat-resize-dialog-container',
            disableClose: true 
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
          });
        }
    

  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed to avoid memory leaks
    if (this.movieEventSubscription) {
      this.movieEventSubscription.unsubscribe();
    }
  }

}
