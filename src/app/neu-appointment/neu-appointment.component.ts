import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Appointment } from '../model/appointment';
import { RoomRequest } from '../model/pojo';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-neu-appointment',
  templateUrl: './neu-appointment.component.html',
  styleUrls: ['./neu-appointment.component.css']
})
export class NeuAppointmentComponent implements OnInit {

  public appointment : Appointment = new Appointment();
  

  constructor(private roomService: RoomService) { }
  

  onSubmit(newEventForm : NgForm) {
    const subject: string = newEventForm.value.subject;
    const startTime: string = newEventForm.value.startTime;
    const endTime: string = newEventForm.value.endTime;
    const roomNumber:string = localStorage.getItem("roomNumber")!;

 
    console.log(roomNumber);

    this.appointment.setDate();
    this.appointment.setSubject(subject);
    this.appointment.setStartTime(startTime.split('T')[1]);
    this.appointment.setEndTime(endTime.split('T')[1]);

    console.log(this.appointment.startTime)

    const roomRequest: RoomRequest = {
      roomNumber: roomNumber,
      appointment: this.appointment,
    }

    console.log(roomRequest);
    this.roomService.addAppointmentToRoom(roomRequest).subscribe();

 
  }

  ngOnInit(): void {
    
  }

}
