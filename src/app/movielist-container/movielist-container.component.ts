import { Component, Input, input, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { WatchmovieDialogComponent } from '../watchmovie-dialog/watchmovie-dialog.component';
import { Skeletoncard1Component } from "../skeleton/skeletoncard1/skeletoncard1.component";
import { MoviesService } from '../admin/services/movies.service';
import { Subscription } from 'rxjs';

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
   private movieEventSubscription!: Subscription;

   ngOnChanges(changes: SimpleChanges): void {
     if (changes['isMovieLoaded']) {
       console.log('isMovieLoaded changed:', changes['isMovieLoaded'].currentValue);
     }
   }

    constructor(public dialog: MatDialog ,private movieService:MoviesService){
    }

    ngOnInit(){
          // Subscribe to the service event
    this.movieEventSubscription = this.movieService.getMovieEventEmitter()
    .subscribe(data => {
        debugger
      this.isMovieLoaded = data;
      console.log('Event received:', data);
    });
    }

    openWatchMovieDialog(){
        const dialogRef = this.dialog.open(WatchmovieDialogComponent, {
            data: {name: 'dialod'},
            width: '50vw', // Set the width
            height: '70vh', // Set the height
            minWidth:'600px',
            panelClass: 'mat-resize-dialog-container',
            disableClose: true 
          });
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
          });
        }
    


 movies = [
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXO-3Ok8XXy2tyIFV38fTAWC7EGycYYiezIg&s",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor."
    },
    {
        title: "The Godfather",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QZSzT0MRgWiCIwBFwAbzgH5r26AjGvg42w&s",
        description: "An organized crime dynasty's aging patriarch transfers control to his reluctant son."
    },
    {
        title: "Schindler's List",
        image: "data:image/jpeg;base64,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",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler."
    },
    {
        title: "Fight Club",
        image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg",
        description: "An insomniac office worker forms an underground fight club."
    },
    {
        title: "The Shawshank Redemption",
        image: "https://i.scdn.co/image/ab67616d0000b273e710c1f5b228046932790031",
        description: "Two imprisoned men bond over a number of years."
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

  ngOnDestroy(): void {
    // Unsubscribe when the component is destroyed to avoid memory leaks
    if (this.movieEventSubscription) {
      this.movieEventSubscription.unsubscribe();
    }
  }

}
