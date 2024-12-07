import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthService } from '../../auth/auth.service';
import { NotificationService } from '../admin/services/notification.service';

@Component({
  selector: 'app-watchmovie-dialog',
  standalone: true,
  imports: [DragDropModule ,CommonModule ,MatTooltipModule],
  templateUrl: './watchmovie-dialog.component.html',
  styleUrl: './watchmovie-dialog.component.scss'
})
export class WatchmovieDialogComponent {
  
  isFavorite:boolean=false
  sanitizedUrl!:SafeResourceUrl;
  currentUser: any = null;

  constructor(
    public dialogRef: MatDialogRef<WatchmovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer,
    private authService:AuthService,
    private noificationService:NotificationService,
    private cd:ChangeDetectorRef
  ) {}
  ngOnInit(){
    const authuser: any = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(authuser) || null;

    if (this.data?.url) {
      console.log(this.currentUser)
      let url ="https://www.youtube.com/embed/" + this.extractYouTubeVideoId(this.data?.url)
      this.sanitizedUrl= this.sanitizer.bypassSecurityTrustResourceUrl(url)
      console.log(this.sanitizedUrl)
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }


  favoriteButton(){
    let postData ={
      userid:this.currentUser?._id,
      movieid:this.data.id
    }
    debugger
    this.authService.favoriteMovie(postData).subscribe((res:any)=>{
      this.isFavorite= !this.isFavorite;
      this.noificationService.showSuccess(res?.message, 'success');
      this.cd.detectChanges()
    }),
    (error:any)=>{
      this.noificationService.showError(error.error.message , 'Error')
    }
  }


  extractYouTubeVideoId(url:string) {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }


}
