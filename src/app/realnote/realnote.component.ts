

import {Component,ChangeDetectionStrategy,ViewChild,TemplateRef,Injectable} from '@angular/core';
import {startOfDay,endOfDay,subDays,addDays,endOfMonth,isSameDay,isSameMonth,addHours} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import { importdata } from '../shared/services/importdata';
import { CIRCULAR } from '@angular/core/src/render3/instructions';
import { selected } from '../shared/services/selectEvent';


const colors: any = {
  red: '#ad2121',
  blue:'#1e90ff',
  yellow:'#e3bc08'
};
@Component({
  selector: 'app-realnote',
  templateUrl: './realnote.component.html',
  styleUrls: ['./realnote.component.css']
})
export class RealnoteComponent {


  refresh: Subject<any> = new Subject();
  eve: any={}
  events: Array<any> = [

    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      summary: '',
      text:'',
      id:0,
      color: colors.blue
    }
  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal,public bb:importdata,public note:selected) {
    if(this.note.clicked){
      this.events = [
        {
          start: this.note.eventclicked[0].start,
          end: this.note.eventclicked[0].end,
          summary: this.note.eventclicked[0].summary,
          text:this.note.eventclicked[0].title,
          color: this.note.eventclicked[0].color,
          id:this.note.eventclicked[0].id=0
        }
      ];
    }
    
   // this.bb.getInfo().subscribe(res =>{this.eve=(res)});
  }


  addToArray(){
  localStorage.setItem('currentUser', JSON.stringify({
    id:this.eve.length+1,
    title: this.events[0].summary,
    summary:this.events[0].text,
    start: this.events[0].start,
    end: this.events[0].end,
    actions: [
      {
          "label": "<i class=\"fa fa-fw fa-pencil\"></i>"
      },
      {
          "label": "<i class=\"fa fa-fw fa-times\"></i>"
      }
  ],
  color: {
    "primary": this.events[0].color,
    "secondary": "#FAE3E3"
},
  }));
   // this.bb.pustInfo(this.eve).subscribe(event1=>{ this.eve.push(event1)});
  }
  
  addEvent(): void {
    this.addToArray();
  console.log(this.eve.id);
 //   this.eve.push({
 //     id:this.eve.length+1,
 //     title: this.events[0].summary,
 //     summary:this.events[0].text,
 //     start: this.events[0].start,
 //     end: this.events[0].end,
 //     actions: [
 //       {
 //           "label": "<i class=\"fa fa-fw fa-pencil\"></i>"
 //       },
 //       {
 //           "label": "<i class=\"fa fa-fw fa-times\"></i>"
 //       }
 //   ],
 //   color: {
 //     "primary": this.events[0].color,
 //     "secondary": "#FAE3E3"
 // },
 //   });
//
 //   this.refresh.next();
  //  this.addToArray();
  }

}
