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
  public authenticated: boolean = false ;

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.authenticated = this.auth.authenticated;
    this.authenticated = this.auth.IsLoggedIn();

  }

  ngAfterContentChecked(): void {
    //this.authenticated = this.auth.authenticated;
    this.authenticated = this.auth.IsLoggedIn();

  }

  signOut(){
    this.authenticated = false;
    this.auth.signOut();
  }

  signIn(){
    this.router.navigateByUrl("/login");
  }


}
