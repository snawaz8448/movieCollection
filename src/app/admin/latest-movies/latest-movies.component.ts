import { Component, ElementRef, ViewChild } from '@angular/core';
import { WatchmovieDialogComponent } from '../../watchmovie-dialog/watchmovie-dialog.component';
import { MoviesService } from '../services/movies.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-latest-movies',
  standalone: true,
  imports: [],
  templateUrl: './latest-movies.component.html',
  styleUrl: './latest-movies.component.scss'
})
export class LatestMoviesComponent {




  @ViewChild('latest', { static: true }) latest!: ElementRef;

  constructor(public dialog: MatDialog ,private movieService:MoviesService){}

  scrollLeft() {
    this.latest.nativeElement.scrollBy({ left: -600, behavior: 'smooth' });
  }

  scrollRight() {
    this.latest.nativeElement.scrollBy({ left: 600, behavior: 'smooth' });
  }
  
  moviesx = [
    {
        title: "Ra.One",
        image: "https://assets.gadgets360cdn.com/pricee/assets/product/202205/RaOne-poster_1652193241.jpg",
        description: "An exciting plot with amazing characters. Don't miss it!"
    },
    {
        title: "Inception",
        image: "https://m.media-amazon.com/images/I/71SBgi0X2KL._AC_UF894,1000_QL80_.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology."
    },
    {
        title: "The Dark Knight",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA",
        description: "When the menace known as the Joker emerges from his mysterious past."
    },
    {
        title: "Interstellar",
        image: "https://m.media-amazon.com/images/I/81QtgxskVLL._AC_UF1000,1000_QL80_.jpg",
        description: "A team of explorers travel through a wormhole in space."
    },
    {
        title: "Titanic",
        image: "https://miro.medium.com/v2/resize:fit:1200/0*5MFFtR8MBLOv1q_Z.jpg",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist."
    },
    {
        title: "Avatar",
        image: "https://lumiere-a.akamaihd.net/v1/images/avatar_800x1200_208c9665.jpeg",
        description: "A paraplegic Marine dispatched to the moon Pandora."
    },
    {
        title: "The Avengers",
        image: "https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg",
        description: "Earth's mightiest heroes must come together to fight a global threat."
    },
    {
        title: "Forrest Gump",
        image: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal."
    },
    {
        title: "The Matrix",
        image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality."
    },
    {
        title: "Gladiator",
        image: "https://m.media-amazon.com/images/I/91n+nD4zWGL._AC_SL1500_.jpg",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor."
    },
    {
        title: "The Godfather",
        image: "https://m.media-amazon.com/images/I/51D6u4GE5hL._AC_.jpg",
        description: "An organized crime dynasty's aging patriarch transfers control to his reluctant son."
    },
    {
        title: "Schindler's List",
        image: "https://m.media-amazon.com/images/I/91K-Y0oU2SL._AC_SY679_.jpg",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler."
    },
    {
        title: "Fight Club",
        image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg",
        description: "An insomniac office worker forms an underground fight club."
    },
    {
        title: "The Shawshank Redemption",
        image: "https://m.media-amazon.com/images/I/51NiGl8W2sL._AC_.jpg",
        description: "Two imprisoned men bond over a number of years."
    },
    {
        title: "The Silence of the Lambs",
        image: "https://m.media-amazon.com/images/I/81l7EDmyWBL._AC_SL1500_.jpg",
        description: "A young FBI cadet must confide in an incarcerated and manipulative killer."
    },
    {
        title: "Saving Private Ryan",
        image: "https://m.media-amazon.com/images/I/71fVY1OsOQL._AC_SL1000_.jpg",
        description: "During World War II, Captain Miller and his squad go to find a paratrooper."
    },
    {
        title: "Jurassic Park",
        image: "https://m.media-amazon.com/images/I/91rD2o1-M3L._AC_SL1500_.jpg",
        description: "During a preview tour, a theme park suffers a major power breakdown."
    },
    {
        title: "The Lion King",
        image: "https://m.media-amazon.com/images/I/81z7yK6YZBL._AC_SY879_.jpg",
        description: "Lion prince Simba flees his kingdom after the death of his father."
    },
    {
        title: "Back to the Future",
        image: "https://m.media-amazon.com/images/I/61PUqYGRaDL._AC_SL1000_.jpg",
        description: "A teenager is accidentally sent thirty years into the past."
    },
    {
        title: "Spider-Man: No Way Home",
        image: "https://m.media-amazon.com/images/I/71qYgHe4H9L._AC_SY679_.jpg",
        description: "Peter Parker seeks the help of Doctor Strange to erase his identity."
    },
    {
        title: "Wonder Woman",
        image: "https://m.media-amazon.com/images/I/51I0L8ml9TL._AC_.jpg",
        description: "When an American pilot crashes on her sheltered island paradise."
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        image: "https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_SY679_.jpg",
        description: "An orphaned boy discovers he’s a wizard on his 11th birthday."
    },
    {
        title: "Zootopia",
        image: "https://m.media-amazon.com/images/I/81cBvNYA4OL._AC_SL1500_.jpg",
        description: "In a city of anthropomorphic animals, a bunny cop and a cynical con artist fox."
    },
    {
        title: "The Incredibles",
        image: "https://m.media-amazon.com/images/I/91AHgKl1tKL._AC_SY679_.jpg",
        description: "A family of superheroes is forced to hide their powers."
    },
    {
        title: "Finding Nemo",
        image: "https://m.media-amazon.com/images/I/81+WzF4G2gL._AC_SL1500_.jpg",
        description: "A clownfish named Marlin, is overly cautious."
    },
    {
        title: "Frozen",
        image: "https://m.media-amazon.com/images/I/81e1qD1-FDL._AC_SL1500_.jpg",
        description: "When their kingdom becomes trapped in an eternal winter."
    },
    {
        title: "Coco",
        image: "https://m.media-amazon.com/images/I/81hJj7XCy4L._AC_SY679_.jpg",
        description: "A boy embarks on an extraordinary journey to the land of the dead."
    },
    {
        title: "Moana",
        image: "https://m.media-amazon.com/images/I/81wyktP-WoL._AC_SL1500_.jpg",
        description: "An adventurous teenager sails out on a daring mission."
    },
    {
        title: "Despicable Me",
        image: "https://m.media-amazon.com/images/I/61W8ldDq56L._AC_SL1000_.jpg",
        description: "When a criminal mastermind uses a trio of orphan girls."
    },
    {
        title: "Toy Story",
        image: "https://m.media-amazon.com/images/I/81gGXYKZflL._AC_SL1500_.jpg",
        description: "A cowboy doll is profoundly threatened and jealous."
    },
    {
        title: "The Lego Movie",
        image: "https://m.media-amazon.com/images/I/81y4gCOGJeL._AC_SL1500_.jpg",
        description: "An ordinary LEGO minifigure is mistakenly identified as the Special."
    },
    {
        title: "Inside Out",
        image: "https://m.media-amazon.com/images/I/81uH1THGRwL._AC_SY679_.jpg",
        description: "After Riley's family moves to a new city, her emotions conflict."
    },
    {
        title: "Jurassic World",
        image: "https://m.media-amazon.com/images/I/81Tzt0q4uEL._AC_SL1500_.jpg",
        description: "A theme park is built on the original site of Jurassic Park."
    },
    {
        title: "Ghostbusters",
        image: "https://m.media-amazon.com/images/I/91wxj0bfrPL._AC_SL1500_.jpg",
        description: "Three former parapsychology professors set up shop as a ghost removal service."
    }
  ]

  openWatchMovieDialog(){
    const dialogRef = this.dialog.open(WatchmovieDialogComponent, {
        data: {name: 'dialod'},
        width: '50vw', // Set the width
        height: '70vh', // Set the height
        minWidth:'600px',
        panelClass: 'mat-resize-dialog-container',
        disableClose: true 
      });
      dialogRef.afterClosed().subscribe((result:any) => {
        console.log('The dialog was closed');
      });
    }



}
