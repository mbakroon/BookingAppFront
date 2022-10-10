import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NotificationType } from "../enum/notification-type.enum";
import { NotificationService } from "../service/notification.service";

@Injectable({providedIn: 'root'})
export class Auth{
   
    public authenticated!: boolean;

    constructor(private notificationService: NotificationService, 
                private router: Router){}

    signOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('roomNumber');
        localStorage.removeItem('isAuthenticate');
        this.authenticated = false;
        this.notificationService.notify(
          NotificationType.SUCCESS,
          'You are sucess loged out'
        );
          this.router.navigateByUrl('/login')
      }

    public IsLoggedIn(): boolean{
        if(localStorage.getItem('token')){
            return true;
        }else{
            //this.signOut();
        }
        return false;

        
    }


}