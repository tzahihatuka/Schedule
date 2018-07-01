import { Injectable } from "@angular/core";
import { Observable} from 'rxjs';
import { HttpClient } from "@angular/common/http";
import {CalendarEvent,CalendarEventAction,CalendarEventTimesChangedEvent} from 'angular-calendar';
@Injectable()
export class importdata{

  
    constructor(private httpService:HttpClient){
    this.getInfo(); 
    }
    public getInfo(){
        let url:string=`http://localhost:3000`;
        return this.httpService.get(url);
        }
        public pustInfo(event1){
            console.log(event1);
            let a=JSON.stringify(event1);
            return this.httpService.post(`http://localhost:3000`,event1);
        }
}