import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { NotificationService } from '../services/notification.service';
import {MatTableModule} from '@angular/material/table';
import { LoadingComponent } from "../../loading/loading.component";

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [MatTableModule, LoadingComponent],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.scss',
})
export class AllUsersComponent {

  displayedColumns: string[] = ['position', 'name', 'email', 'role', 'photo' ];
  isUserloading:boolean=false;
  ELEMENT_DATA: any[] = [
   
  ];


  dataSource = this.ELEMENT_DATA;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    console.log('All Users Component Init');
    this.isUserloading=true
    this.authService.GetAllUser().subscribe(
      (res: any) => {
        this.isUserloading=false
        this.dataSource= res?.data?.users
        console.log(res);
      },
      (error: any) => {
        this.isUserloading=false;
        this.notificationService.showError(error?.error?.message, 'Error');
      }
    );
}

}


