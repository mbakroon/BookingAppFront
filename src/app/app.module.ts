import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotificationModule } from './notification/notification.module';
import { FormsModule } from '@angular/forms';
import { NeuAppointmentComponent } from './neu-appointment/neu-appointment.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './service/notification.service';
import { Auth } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CalendarComponent,
    NeuAppointmentComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotificationModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NotificationService,Auth,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
