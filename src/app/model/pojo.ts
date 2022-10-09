import { Appointment } from "./appointment";

export interface RoomRequest{

    roomNumber: string | null; 
    appointment: Appointment;

}