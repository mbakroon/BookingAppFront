import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppComponent } from '../app.component';
import { Auth } from '../auth/auth.service';
import { Appointment } from '../model/appointment';
import { Room } from '../model/room';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private auth: Auth, private roomService: RoomService) {}

  public loadedRoom: Room = new Room();
  public sub: Subscription[] = [];
  public authenticated: boolean = false;
  public isReserved: Boolean = false;
  public appointments: Appointment[] = [];
  public minute: number = 50;

  ngOnInit(): void {
    const roomNumber = localStorage.getItem('roomNumber') as string;
    this.authenticated = Boolean(localStorage.getItem("isAuthenticate") );
    this.sub.push(this.roomService
      .getRoomByRoomNumber(roomNumber)
      .subscribe((response) => {
        this.loadedRoom = response;
      }));

      setInterval(()=>{
        this.checkAppointmentAvailability();
        console.log(this.appointments);
      },10000)

  }


  checkAppointmentAvailability(){
    const roomNumber = localStorage.getItem('roomNumber') as string;
    // let currentDate = new Date().toLocaleTimeString().slice(0,5);
    let currentDate = new Date().getTime();

    this.roomService.getAllAppointments("111").subscribe(
      (response: Appointment[])=>{
        this.appointments = response;
      }
    )
    console.log(currentDate);
    this.appointments.forEach(appointment => {
      const startTime =this.convertStringToTime(appointment.startTime);
      const endTime = this.convertStringToTime(appointment.endTime);
      
      if(currentDate >= startTime && currentDate <= endTime){
        this.isReserved = true;
      }else{
        this.isReserved = false;
      }
      
      
    });

  }

  convertStringToTime(time: string){
    var now = new Date();
    var nowDateTime = now.toISOString();
    var nowDate = nowDateTime.split('T')[0];
    var hms = '01:12:33';
    var target = new Date(nowDate + 'T' + time);
    return target.getTime();
  }

  ngOnDestroy(): void {
    this.sub.forEach((sub: Subscription)=>{
      sub.unsubscribe();
    });
  }

}
