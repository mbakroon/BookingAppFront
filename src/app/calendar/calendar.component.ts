import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
reserveTitle: any;
events: any;
formatDateTimeTimeZone(arg0: any): string|number|Date {
throw new Error('Method not implemented.');
}
  appointments: Appointment[]= [];
  public roomNumber: string = '';
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomNumber = localStorage.getItem('roomNumber')!;
    setInterval(()=>{
      return this.roomService.getAllAppointments(this.roomNumber).subscribe(
        (response => {
          this.appointments = response;
        })
      );
    },5000)
  }

}
