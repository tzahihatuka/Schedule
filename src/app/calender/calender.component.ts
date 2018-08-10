import {
  Component,OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {startOfDay,endOfDay,subDays,addDays,endOfMonth,isSameDay,isSameMonth,addHours} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import { importdata } from '../shared/services/importdata';
import { selected } from '../shared/services/selectEvent';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})

export class CalenderComponent  {
  
  public getdata1:any=[{}];
  public events : CalendarEvent[]=[]
  constructor(public bb:importdata,private modal: NgbModal,public note:selected) {
    this.getdata1=[JSON.parse(localStorage.getItem('currentUser'))];
    for(let item in this.getdata1)
    this.events.push({
      title: this.getdata1[item].title,
      start: new Date(this.getdata1[item].start) ,
      end: new Date(this.getdata1[item].end),
      color: this.getdata1[item].color,
      id:this.getdata1[item].id
    });
    console.log(this.events);
    //this.bb.getInfo().subscribe(res =>{this.getdata1=res;console.log(this.events)});
  }





  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };



  refresh: Subject<any> = new Subject();


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(events);
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];
  public id=10;
  activeDayIsOpen: boolean = true;
  
 
  handleEvent(action: string, event: CalendarEvent): void {
    this.note.getEventData(event.id)
  }
  //   ngOnInit() {for(let item in this.getdata1[0]){
  //  this.events.push({
  //  title: this.getdata1[item].title,
  //  start: new Date(this.getdata1[item].start) ,
  //  end: new Date(this.getdata1[item].end),
  //  color: this.getdata1[item].color,
  //  id:this.getdata1[item].id
  //});}
 // 
 // console.log(this.events);
 // }
  
}
