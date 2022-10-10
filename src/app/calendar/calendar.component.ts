import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotificationType } from '../enum/notification-type.enum';
import { Appointment } from '../model/appointment';
import { NotificationService } from '../service/notification.service';
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
  constructor(private roomService: RoomService, 
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.roomNumber = localStorage.getItem('roomNumber')!;
    this.getAll();
    this.roomService.refreshTable.subscribe(response => {
      this.roomService.getAllAppointments(this.roomNumber).subscribe(result => {
        this.appointments = result;
      })
    })

  }

  getAll(){
      this.roomService.getAllAppointments(this.roomNumber).subscribe(result => {
        this.appointments = result;
      })
  }

}
