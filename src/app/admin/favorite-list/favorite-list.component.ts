import { Component, Inject } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [MatListModule , MatIconModule , MatExpansionModule ,MatAccordion],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.scss'
})
export class FavoriteListComponent {

  
  constructor( public dialogRef: MatDialogRef<FavoriteListComponent>,
    @Inject(MAT_DIALOG_DATA )public data: any){

  }

  movies: Movie[] = [
    { id: 1, title: 'Inception', year: 2010, description: 'A thief who steals corporate secrets...', isFavorite: false },
    { id: 2, title: 'Interstellar', year: 2014, description: 'A team of explorers travel through a wormhole...', isFavorite: false },
    { id: 3, title: 'The Dark Knight', year: 2008, description: 'When the menace known as the Joker emerges...', isFavorite: false },
    // Add more movies as needed
  ];

  getMovies(): Movie[] {
    return this.movies;
  }

  toggleFavorite(movie: Movie) {
    movie.isFavorite = !movie.isFavorite;
  }


  closeDialog(){
    this.dialogRef.close();
  }



}

interface Movie {
  id: number;
  title: string;
  year: number;
  isFavorite: boolean;
  description:string
}