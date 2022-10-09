import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class Auth{
   
    public authenticated: boolean = false;

    constructor(){}

    public IsLoggedIn(): boolean{

        if(localStorage.getItem('token')){
            this.authenticated = true;
            return true;
        }
        return false;
    }


}