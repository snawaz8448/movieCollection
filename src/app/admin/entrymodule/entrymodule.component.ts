import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { NotificationService } from '../services/notification.service';
import { Movie } from '../../commonInterface';
import { LoadingComponent } from "../../loading/loading.component";

@Component({
  selector: 'app-entrymodule',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule, RouterModule, MatSelectModule, LoadingComponent],
  templateUrl: './entrymodule.component.html',
  styleUrl: './entrymodule.component.scss'
})
export class EntrymoduleComponent {

  EntryMovieInForm!:FormGroup
  isMovieUploading:boolean=false

  constructor(private fb:FormBuilder ,  private movieService:MoviesService ,  private noificationService:NotificationService ,  private cd:ChangeDetectorRef){
    this.EntryMovieInForm = this.fb.group({
      name:['', [Validators.required]],
      description:['', [Validators.required]],
      movieurl:['', [Validators.required]],
      duration:['', [Validators.required]],
      rating:['', [Validators.required]],
      releaseyear:['', [Validators.required]],
      releasedate:['', [Validators.required]],
      generes:['', [Validators.required]],
      directors:['', [Validators.required]],
      coverImage:['', [Validators.required]],
      actors:['', [Validators.required]],
      price:[''],
      category:['', [Validators.required]],
      subCategory:['', [Validators.required]]
    })

  }

  ngOnInit(){

  }


  onSubmit(){
    console.log(this.EntryMovieInForm.value);
    let categoryx=[];
    let subCategoryx = [];
    categoryx.push(this.EntryMovieInForm.get('category')?.value)
    subCategoryx.push(this.EntryMovieInForm.get('subCategory')?.value)
    const movieData:Movie = {
      name: this.EntryMovieInForm.get('name')?.value,
      description: this.EntryMovieInForm.get('description')?.value,
      movieurl: this.EntryMovieInForm.get('movieurl')?.value,
      actors: this.EntryMovieInForm.get('actors')?.value,
      category: categoryx,
      coverImage: this.EntryMovieInForm.get('coverImage')?.value,
      directors: this.EntryMovieInForm.get('directors')?.value,
      duration: this.EntryMovieInForm.get('duration')?.value,
      generes: this.EntryMovieInForm.get('generes')?.value,
      price: this.EntryMovieInForm.get('price')?.value,
      rating: this.EntryMovieInForm.get('rating')?.value,
      releasedate: this.EntryMovieInForm.get('releasedate')?.value,
      releaseyear: this.EntryMovieInForm.get('releaseyear')?.value,
      subCategory: subCategoryx,
    };
    if(this.EntryMovieInForm.valid){
      this.isMovieUploading=true;
      this.movieService.addMovies(movieData).subscribe((res:any)=>{
        console.log(res);
        this.noificationService.showSuccess('Movie Added Successfully', 'success');
        this.EntryMovieInForm.reset();
        this.isMovieUploading=false;
        this.cd.detectChanges()
      }),
      (error:any)=>{
        this.noificationService.showError(error.error.message , 'Error')
        this.isMovieUploading=false;
      }
    }
    else{
      this.noificationService.showError('Please fill all the fields', 'Error')
    }
  }
}
