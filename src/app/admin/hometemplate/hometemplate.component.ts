import { Component, ElementRef, ViewChild } from '@angular/core';
import { MovielistContainerComponent } from "../../movielist-container/movielist-container.component";
import { CommonModule } from '@angular/common';
import { LatestMoviesComponent } from "../latest-movies/latest-movies.component";
import { LatestSerialComponent } from "../latest-serial/latest-serial.component";
import { PopularShowComponent } from "../popular-show/popular-show.component";
import { UpcomingComponent } from "../upcoming/upcoming.component";

@Component({
  selector: 'app-hometemplate',
  standalone: true,
  imports: [MovielistContainerComponent, CommonModule, LatestMoviesComponent, LatestSerialComponent, PopularShowComponent, UpcomingComponent],
  templateUrl: './hometemplate.component.html',
  styleUrl: './hometemplate.component.scss'
})
export class HometemplateComponent {
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







    @ViewChild('latest', { static: true }) latest!: ElementRef;

  scrollLeft() {
    this.latest.nativeElement.scrollBy({ left: -600, behavior: 'smooth' });
  }

  scrollRight() {
    this.latest.nativeElement.scrollBy({ left: 600, behavior: 'smooth' });
  }

}




