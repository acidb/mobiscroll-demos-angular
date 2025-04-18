import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-setting-row-height',
  styleUrl: './setting-row-height.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './setting-row-height.html',
  providers: [Notifications],
  standalone: false,
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,2'),
      end: dyndatetime('y,m,5'),
      title: 'Event 1',
      resource: 'res1',
    },
    {
      start: dyndatetime('y,m,9'),
      end: dyndatetime('y,m,15'),
      title: 'Event 2',
      resource: 'res1',
    },
    {
      start: dyndatetime('y,m,5'),
      end: dyndatetime('y,m,9'),
      title: 'Event 3',
      resource: 'res2',
    },
    {
      start: dyndatetime('y,m,8'),
      end: dyndatetime('y,m,13'),
      title: 'Event 4',
      resource: 'res3',
    },
    {
      start: dyndatetime('y,m,7'),
      end: dyndatetime('y,m,12'),
      title: 'Event 5',
      resource: 'res3',
    },
    {
      start: dyndatetime('y,m,3'),
      end: dyndatetime('y,m,10'),
      title: 'Event 6',
      resource: 'res4',
    },
    {
      start: dyndatetime('y,m,15'),
      end: dyndatetime('y,m,23'),
      title: 'Event 7',
      resource: 'res4',
    },
    {
      start: dyndatetime('y,m,12'),
      end: dyndatetime('y,m,17'),
      title: 'Event 8',
      resource: 'res5',
    },
    {
      start: dyndatetime('y,m,8'),
      end: dyndatetime('y,m,13'),
      title: 'Event 9',
      resource: 'res6',
    },
    {
      start: dyndatetime('y,m,20'),
      end: dyndatetime('y,m,27'),
      title: 'Event 10',
      resource: 'res7',
    },
    {
      start: dyndatetime('y,m,6'),
      end: dyndatetime('y,m,12'),
      title: 'Event 11',
      resource: 'res8',
    },
    {
      start: dyndatetime('y,m,18'),
      end: dyndatetime('y,m,25'),
      title: 'Event 12',
      resource: 'res8',
    },
  ];

  calView: MbscEventcalendarView = {
    timeline: {
      type: 'month',
    },
  };

  myResources = [
    {
      id: 'gro1',
      name: 'Team 1',
      color: '#ff1717',
      eventCreation: false,
      children: [
        {
          id: 'res1',
          name: 'Ryan',
          color: '#1dab2f',
          title: 'Cloud System Engineer',
          img: 'https://img.mobiscroll.com/demos/m1.png',
        },
        {
          id: 'res2',
          name: 'Kate',
          color: '#e20000',
          title: 'Help Desk Specialist',
          img: 'https://img.mobiscroll.com/demos/f1.png',
        },
        {
          id: 'res3',
          name: 'John',
          color: '#4981d6',
          title: 'Application Developer',
          img: 'https://img.mobiscroll.com/demos/m2.png',
        },
      ],
    },
    {
      id: 'gro2',
      name: 'Team 2',
      eventCreation: false,
      children: [
        {
          id: 'res4',
          name: 'Mark',
          color: '#f7961e',
          title: 'Data Quality Manager',
          img: 'https://img.mobiscroll.com/demos/m3.png',
        },
        {
          id: 'res5',
          name: 'Sharon',
          color: '#34c8e0',
          title: 'Network Administrator',
          img: 'https://img.mobiscroll.com/demos/f2.png',
        },
      ],
    },
    {
      id: 'gro3',
      name: 'Team 3',
      color: '#af0000',
      eventCreation: false,
      children: [
        {
          id: 'res6',
          name: 'Emma',
          color: '#843100',
          title: 'Client Services Manager',
          img: 'https://img.mobiscroll.com/demos/f3.png',
        },
        {
          id: 'res7',
          name: 'Ashley',
          color: '#4caf00',
          title: 'Instructional Designer',
          img: 'https://img.mobiscroll.com/demos/f4.png',
        },
        {
          id: 'res8',
          name: 'Derek',
          color: '#7056ff',
          title: 'Architectural Engineer',
          img: 'https://img.mobiscroll.com/demos/m4.png',
        },
      ],
    },
  ];
}
