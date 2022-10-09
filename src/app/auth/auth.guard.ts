
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationType } from '../enum/notification-type.enum';
import { NotificationService } from '../service/notification.service';
import { Auth } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router, 
    private notificationService: NotificationService) {}


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.isUserLoggedIn();
    }

 

  private isUserLoggedIn(): boolean {
    if (this.auth.IsLoggedIn()) {
      return true;
    }
    
    this.notificationService.notify(
      NotificationType.ERROR,
      `You need to log in to access this page`
    );
    return false;
  }
}
