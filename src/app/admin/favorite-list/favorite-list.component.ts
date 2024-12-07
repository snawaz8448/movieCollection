import { Component, Inject, Input, input } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingComponent } from "../../loading/loading.component";
import { MoviesService } from '../services/movies.service';
import { NotificationService } from '../services/notification.service';
import { WatchmovieDialogComponent } from '../../watchmovie-dialog/watchmovie-dialog.component';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatExpansionModule, MatAccordion, LoadingComponent],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.scss'
})
export class FavoriteListComponent {

  @Input() currentUser:any
  
  constructor( public dialogRef: MatDialogRef<FavoriteListComponent>,
    @Inject(MAT_DIALOG_DATA )public data: any,
    private movieService:MoviesService,
    private notificationServive:NotificationService,
    public dialog: MatDialog
  ){

  }
  isFavoriteMovieLoading:boolean=false
  movies: any[] = [ ]


  ngOnInit(){
    this.isFavoriteMovieLoading=true;
      this.getFavoriteMovieList();

  }

  getMovies(): Movie[] {
    return this.movies;
  }

  toggleFavorite(movie: Movie) {
    movie.isFavorite = !movie.isFavorite;
  }


  closeDialog(){
    this.dialogRef.close();
  }


  getFavoriteMovieList() {
    this.movieService.getFavoriteMovies(this.currentUser._id).subscribe(
      (res: any) => {
        this.isFavoriteMovieLoading=false;
        this.movies=res.data.favoritemovies;
        console.log(res);
      },
      (error: any) => {  // Corrected this part
        this.isFavoriteMovieLoading=false;
        this.notificationServive.showError(error?.error?.message, 'Error');
      }
    );
  }
  

  watchNow(url:string , description:string  , id:any){
    this.dialogRef.close();
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


}

interface Movie {
  id: number;
  title: string;
  year: number;
  isFavorite: boolean;
  description:string
}