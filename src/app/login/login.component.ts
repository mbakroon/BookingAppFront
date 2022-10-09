import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Auth } from '../auth/auth.service';
import { NotificationType } from '../enum/notification-type.enum';
import { Room } from '../model/room';
import { NotificationService } from '../service/notification.service';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public room: Room = new Room;

  constructor(private roomService: RoomService, 
              private auth: Auth,
              private notificationService: NotificationService, 
              private router: Router) { }


  ngOnInit(): void {
    if (this.auth.IsLoggedIn()) {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/login');
    }
  }


  login(roomNumber: string){
    localStorage.setItem('roomNumber',this.roomService.roomNumber );
    localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InJvb20iLCJpYXQiOjE1MTYyMzkwMjJ9.09l3IQzhIMkaDuFnA76ULitS2ihFeKDNb6_wQJNlGJU")
    localStorage.setItem('roomNumber',roomNumber);
    localStorage.setItem('isAuthenticate','true');
    this.roomService.getRoomByRoomNumber(roomNumber).subscribe((response: Room) =>{
        this.notificationService.sendNotification(NotificationType.SUCCESS,`Login Success`);
        this.router.navigateByUrl('/home');
    },
    (errorResponse: HttpErrorResponse)=>{
      this.notificationService.notify(
        NotificationType.ERROR,
        errorResponse.error.message
      )
    });
     
  }

  
}
