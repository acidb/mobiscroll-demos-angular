import { Component, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-eventcalendar-drag-drop-between-calendar-instances',
  styleUrl: './drag-drop-between-calendar-instances.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './drag-drop-between-calendar-instances.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  myView: MbscEventcalendarView = {
    calendar: {
      type: 'month',
    },
  };

  firstEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m-1,18'),
      end: dyndatetime('y,m-1,20'),
      title: 'Event 1',
      color: '#e20000',
    },
    {
      start: dyndatetime('y,m-1,22'),
      end: dyndatetime('y,m-1,24'),
      title: 'Event 2',
      color: '#166f6f',
    },
    {
      start: dyndatetime('y,m-1,27'),
      end: dyndatetime('y,m-1,28'),
      title: 'Event 3',
      color: '#166f6f',
    },
    {
      start: dyndatetime('y,m,1'),
      end: dyndatetime('y,m,3'),
      title: 'Event 4',
      color: '#a32f00',
    },
    {
      start: dyndatetime('y,m,5'),
      end: dyndatetime('y,m,7'),
      title: 'Event 5',
      color: '#8b8b00',
    },
    {
      start: dyndatetime('y,m,11'),
      end: dyndatetime('y,m,13'),
      title: 'Event 6',
      color: '#1dab2f',
    },
    {
      start: dyndatetime('y,m,15'),
      end: dyndatetime('y,m,16'),
      title: 'Event 7',
      color: '#4981d6',
    },
    {
      start: dyndatetime('y,m,20'),
      end: dyndatetime('y,m,21'),
      title: 'Event 8',
      color: '#4418d2',
    },
    {
      start: dyndatetime('y,m,26'),
      end: dyndatetime('y,m,26'),
      title: 'Event 9',
      color: '#6e7f29',
    },
    {
      start: dyndatetime('y,m+1,3'),
      end: dyndatetime('y,m+1,4'),
      title: 'Event 10',
      color: '#8b0000',
    },
    {
      start: dyndatetime('y,m+1,9'),
      end: dyndatetime('y,m+1,10'),
      title: 'Event 11',
      color: '#a32f00',
    },
    {
      start: dyndatetime('y,m+1,14'),
      end: dyndatetime('y,m+1,16'),
      title: 'Event 12',
      color: '#152d2b',
    },
  ];

  secondEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m-1,20'),
      end: dyndatetime('y,m-1,20'),
      title: 'Event 1',
      color: '#',
    },
    {
      start: dyndatetime('y,m-1,24'),
      end: dyndatetime('y,m-1,26'),
      title: 'Event 2',
      color: '#',
    },
    {
      start: dyndatetime('y,m-1,28'),
      end: dyndatetime('y,m-1,28'),
      title: 'Event 3',
      color: '#4418d2',
    },
    {
      start: dyndatetime('y,m,2'),
      end: dyndatetime('y,m,2'),
      title: 'Event 4',
      color: '#8b1a1a',
    },
    {
      start: dyndatetime('y,m,6'),
      end: dyndatetime('y,m,7'),
      title: 'Event 5',
      color: '#e7b300',
    },
    {
      start: dyndatetime('y,m,12'),
      end: dyndatetime('y,m,13'),
      title: 'Event 6',
      color: '#a32f00',
    },
    {
      start: dyndatetime('y,m,17'),
      end: dyndatetime('y,m,19'),
      title: 'Event 7',
      color: '#21a833',
    },
    {
      start: dyndatetime('y,m,22'),
      end: dyndatetime('y,m,22'),
      title: 'Event 8',
      color: '#a917bb',
    },
    {
      start: dyndatetime('y,m,25'),
      end: dyndatetime('y,m,27'),
      title: 'Event 9',
      color: '#e20000',
    },
    {
      start: dyndatetime('y,m+1,1'),
      end: dyndatetime('y,m+1,2'),
      title: 'Event 10',
      color: '#4981d6',
    },
    {
      start: dyndatetime('y,m+1,4'),
      end: dyndatetime('y,m+1,4'),
      title: 'Event 11',
      color: '#166f6f',
    },
    {
      start: dyndatetime('y,m+1,8'),
      end: dyndatetime('y,m+1,10'),
      title: 'Event 12',
      color: '#d6d145',
    },
  ];

  handleFirstCalEventCreated(args: any) {
    if (args.action === 'externalDrop') {
      this.notify.toast({
        context: '.md-drag-drop-first-calendar',
        message: 'Event dropped to Calendar 1',
      });
    }
  }

  handleSecondCalEventCreated(args: any) {
    if (args.action === 'externalDrop') {
      this.notify.toast({
        context: '.md-drag-drop-second-calendar',
        message: 'Event dropped to Calendar 2',
      });
    }
  }
}
