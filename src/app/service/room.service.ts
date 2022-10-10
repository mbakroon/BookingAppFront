import { Injectable,  } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, Subject, tap } from 'rxjs';
import { Room } from '../model/room';
import { environment } from 'src/environments/environment';
import { RoomRequest } from '../model/pojo';
import { Appointment } from '../model/appointment';


@Injectable({
  providedIn: 'root'
})
export class RoomService  {
  private host = environment.apiUrl;


  public room: Room = new Room;
  public roomNumber: string = '';

  constructor(private http: HttpClient) { }

  loadRoomFromBD(room: Room){
    this.room = room;
    console.log(this.room);
  }

  public getRooms(): Observable<Room[] | HttpErrorResponse>{
    return this.http.get<Room[]>(`${this.host}/list`);
  }

  public getRoom(): Observable<Room | HttpErrorResponse>{
    return this.http.get<Room>(`${this.host}/room`)
  }

  public addRoom(fomData: FormData): Observable<Room>{
    return this.http.post<Room>(`${this.host}/addRoom"`, fomData);
  }

  public addAppointmentToRoom(roomRequest: RoomRequest): Observable<Room>{
    return this.http.post<Room>(`${this.host}/addAppointment`, roomRequest).pipe(
      tap(()=>{
        this._refreshTable.next();
      })
    );
  }

  public getRoomByRoomNumber(roomNumber: string): Observable<Room>{
    return this.http.get<Room>(`${this.host}/find/${roomNumber}`);
  }

  public getAllAppointments( roomNumber: string): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.host}/list/appointments/${roomNumber}`);
  }

  // to refresh data in Table if neu Appointment is added
  private _refreshTable = new Subject<void>();
  get refreshTable(){
    return this._refreshTable;
  }
}
