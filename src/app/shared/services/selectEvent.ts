import { Injectable } from "@angular/core";
import { Observable} from 'rxjs';
import { HttpClient } from "@angular/common/http";
import {CalendarEvent,CalendarEventAction,CalendarEventTimesChangedEvent} from 'angular-calendar';
import { importdata } from "src/app/shared/services/importdata";
@Injectable()
export class selected{
public clicked:boolean=false;
public getdata1:any=[{}];
public eventclicked:Array<any>=[];
constructor(public bb:importdata) {
    this.getdata1=[JSON.parse(localStorage.getItem('currentUser'))];
   
    this.bb.getInfo().subscribe(res =>{this.getdata1=res;});
    
  }
public getEventData(id:any):void{
    console.log(id);
    this.eventclicked.push(this.getdata1);
    console.log(this.eventclicked)
    for(let i =0;i<this.eventclicked[0].length;i++){
        if(this.getdata1[i].id==id){
            this.eventclicked=[];
            this.eventclicked.push(this.getdata1[i]);
        }
    }
    console.log(this.eventclicked);
    this.clicked=true;
}
}