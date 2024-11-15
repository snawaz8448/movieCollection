import { Component, ElementRef, ViewChild } from '@angular/core';
import { MovielistContainerComponent } from "../../movielist-container/movielist-container.component";
import { CommonModule } from '@angular/common';
import { LatestMoviesComponent } from "../latest-movies/latest-movies.component";
import { LatestSerialComponent } from "../latest-serial/latest-serial.component";
import { PopularShowComponent } from "../popular-show/popular-show.component";
import { UpcomingComponent } from "../upcoming/upcoming.component";
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-hometemplate',
  standalone: true,
  imports: [MovielistContainerComponent, CommonModule, LatestMoviesComponent, LatestSerialComponent, PopularShowComponent, UpcomingComponent],
  templateUrl: './hometemplate.component.html',
  styleUrl: './hometemplate.component.scss'
})
export class HometemplateComponent {
    isMovieLoaded:boolean=false;


    constructor(private movieService:MoviesService){
        this.getAllMovie();
    }

    getAllMovie(){
     this.movieService.getAllMovies().subscribe((data:any) => {
        this.isMovieLoaded=true
       console.log(data)
    })}
 

  movies = [
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1Q7cM3N0uyhZaO09U65AuGG0BjwqfmGrNQejj1-AybmAS9a62gin7BQ1B2MfNU0zWqrVR1CFMeW2afrDcNjSbpVdeq9HVL-LpIbtBOA", // Inception
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      poster: "data:image/webp;base64,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", // Interstellar
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      poster: "https://images4.alphacoders.com/288/thumb-1920-288218.jpg", // The Dark Knight
    },
    {
      title: "Avatar",
      description: "In the 22nd century, a paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      poster: "https://cdn.britannica.com/14/135414-050-D4323070/Sam-Worthington-Avatar-character-Jake-Sully-Neytiri.jpg", // Avatar
    }]



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
          image: "data:image/jpeg;base64,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",
          description: "A former Roman General sets out to exact vengeance against the corrupt emperor."
      },
      {
          title: "The Godfather",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SZtaV4ACYRDf08wz6RMtKcPTNo_c7JAU4A&s",
          description: "An organized crime dynasty's aging patriarch transfers control to his reluctant son."
      },
      {
          title: "Schindler's List",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdz0J3-atNNhji92Bct_v1LATEfP8DF6u-SA&s",
          description: "In German-occupied Poland during World War II, industrialist Oskar Schindler."
      },
      {
          title: "Fight Club",
          image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg",
          description: "An insomniac office worker forms an underground fight club."
      },
      {
          title: "The Shawshank Redemption",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlr03CRVS0Cmt_DjWo_kB03r1dNz-Y1HwwOg&s",
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







    @ViewChild('latest', { static: true }) latest!: ElementRef;

  scrollLeft() {
    this.latest.nativeElement.scrollBy({ left: -600, behavior: 'smooth' });
  }

  scrollRight() {
    this.latest.nativeElement.scrollBy({ left: 600, behavior: 'smooth' });
  }

}




