export class Appointment{

    public id: number;
    public subject : string;
    public date: string;
    public startTime : string;
    public endTime :string;

    constructor(){
        this.id = 0;
        this.subject ='';
        this.date ='';
        this.startTime = '';
        this.endTime = '';

    }

    setSubject(subject: string){
        this.subject = subject;
    }
    setDate(){
        this.date = new Date().toISOString();
    }
    setStartTime(startTime: string){
        this.startTime = startTime;
    }
    setEndTime(endTime: string){
        this.endTime = endTime;
    }
}