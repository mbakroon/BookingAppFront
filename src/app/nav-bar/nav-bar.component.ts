import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth/auth.service';
import { NotificationType } from '../enum/notification-type.enum';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  public authenticated: boolean = true;

  constructor(
    private auth: Auth,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authenticated = Boolean(localStorage.getItem("isAuthenticate"));
    console.log(this.authenticated);
  }


  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('roomNumber');
    localStorage.removeItem('isAuthenticate');
    this.notificationService.notify(
      NotificationType.SUCCESS,
      'You are sucess loged out'
    );
      this.router.navigateByUrl('/login')
  }
}
