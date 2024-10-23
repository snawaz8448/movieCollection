import { Injectable } from '@angular/core';
import { ToastrService, ToastrModule } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService ){ }

  showSuccess(message: string | undefined, title: string | undefined ): void {
    this.toastr.success(message, title, {
      tapToDismiss: true,
      progressBar: true,
      messageClass: "messageClass",
      progressAnimation: "increasing",
      closeButton: true
    });
  }

  showError(message: string | undefined, title: string | undefined ): void {
    debugger
    this.toastr.error(message, title,{
      tapToDismiss: true,
      progressBar: true,
      messageClass: "messageClass",
      progressAnimation: "increasing",
      closeButton: true
    });
  }

  showInfo(message: string | undefined, title: string | undefined ): void {
    this.toastr.info(message, title,{
      tapToDismiss: true,
      progressBar: true,
      messageClass: "messageClass",
      progressAnimation: "increasing",
      closeButton: true
    });
  }

  showWarning(message: string | undefined, title: string | undefined ): void {
    this.toastr.warning(message, title , {
      tapToDismiss: true,
      progressBar: true,
      messageClass: "messageClass",
      progressAnimation: "increasing",
      closeButton: true
    });
  }


  // showSuccess() {
  //   this.toastr.success('Operation successful!', 'Success');
  // }

  // showError() {
  //   this.toastr.error('Something went wrong!', 'Error');
  // }

  // showWarning() {
  //   this.toastr.warning('This is a warning!', 'Warning');
  // }

  // showInfo() {
  //   this.toastr.info('Here is some information', 'Info');
  // }

}
