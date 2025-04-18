import { Component, ViewEncapsulation } from '@angular/core';
import { formatDate, MbscEventcalendarOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

const defaultSlots = [
  {
    id: 1,
    name: 'Night',
    time: '2AM - 10AM',
  },
  {
    id: 2,
    name: 'Breakfast',
    time: '8AM - 12PM',
  },
  {
    id: 3,
    name: 'Lunch',
    time: '11AM - 3PM',
  },
  {
    id: 4,
    name: 'Dinner',
    time: '4PM - 11PM',
  },
  {
    id: 5,
    name: 'After hours',
    time: '11PM - 1AM',
  },
];

@Component({
  selector: 'app-timeline-restaurant-shift-management',
  styleUrl: './restaurant-shift-management.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './restaurant-shift-management.html',
  standalone: false,
})
export class AppComponent {
  resources = [
    {
      id: 1,
      name: 'Barista',
      icon: '&#x2615;&#xfe0f;',
      eventCreation: false,
      children: [
        {
          id: 11,
          name: 'Jude Chester',
          color: '#1dab2f',
        },
        {
          id: 12,
          name: 'Willis Kane',
          color: '#1dab2f',
        },
        {
          id: 13,
          name: 'Ryan Melicent',
          color: '#1dab2f',
        },
      ],
    },
    {
      id: 2,
      name: 'Bartenders',
      icon: '&#127864;',
      eventCreation: false,
      children: [
        {
          id: 21,
          name: 'Derek Austyn',
          color: '#4981d6',
        },
        {
          id: 22,
          name: 'Merv Kenny',
          color: '#4981d6',
        },
        {
          id: 23,
          name: 'Theo Calanthia',
          color: '#4981d6',
        },
      ],
    },
    {
      id: 3,
      name: 'Chefs',
      icon: '&#128105;&#8205;&#127859;',
      eventCreation: false,
      children: [
        {
          id: 31,
          name: 'Ford Kaiden',
          color: '#d6d145',
        },
        {
          id: 32,
          name: 'Jewell Ryder',
          color: '#d6d145',
        },
        {
          id: 33,
          name: 'Dory Edie',
          color: '#d6d145',
        },
      ],
    },
    {
      id: 4,
      name: 'Cleaners',
      icon: '&#x1f9f9;',
      eventCreation: false,
      children: [
        {
          id: 41,
          name: 'Breanne Lorinda',
          color: '#ff1717',
        },
        {
          id: 42,
          name: 'Jenifer Kalyn',
          color: '#ff1717',
        },
        {
          id: 43,
          name: 'Natalie Racquel',
          color: '#ff1717',
        },
        {
          id: 44,
          name: 'Kaylin Toni',
          color: '#ff1717',
        },
        {
          id: 45,
          name: 'Gray Kestrel',
          color: '#ff1717',
        },
        {
          id: 46,
          name: 'Florence Amy',
          color: '#ff1717',
        },
      ],
    },
    {
      id: 5,
      name: 'Cooks',
      icon: '&#127858;',
      eventCreation: false,
      children: [
        {
          id: 51,
          name: 'Meredith Chantelle',
          color: '#f7961e',
        },
        {
          id: 52,
          name: 'Jon Drake',
          color: '#f7961e',
        },
        {
          id: 53,
          name: 'Carlyn Dorothy',
          color: '#f7961e',
        },
        {
          id: 54,
          name: 'Isadora Lyric',
          color: '#f7961e',
        },
      ],
    },
    {
      id: 6,
      name: 'Hosts',
      icon: '&#128718;',
      eventCreation: false,
      children: [
        {
          id: 61,
          name: 'Layton Candace',
          color: '#7056ff',
        },
        {
          id: 62,
          name: 'Sylvia Cale',
          color: '#7056ff',
        },
      ],
    },
    {
      id: 7,
      name: 'Managers',
      icon: '&#128105;&#8205;&#128188;',
      eventCreation: false,
      children: [
        {
          id: 71,
          name: 'Fred Valdez',
          color: '#3a8700',
        },
        {
          id: 72,
          name: 'Antonia Cindra',
          color: '#3a8700',
        },
        {
          id: 73,
          name: 'Gerry Irma',
          color: '#3a8700',
        },
      ],
    },
    {
      id: 8,
      name: 'Servers',
      icon: '&#129333;',
      eventCreation: false,
      children: [
        {
          id: 81,
          name: 'Reg Izabelle',
          color: '#e25dd2',
        },
        {
          id: 82,
          name: 'Adrianna Sawyer',
          color: '#e25dd2',
        },
        {
          id: 83,
          name: 'Lou Andie',
          color: '#e25dd2',
        },
        {
          id: 84,
          name: 'Leon Porter',
          color: '#e25dd2',
        },
      ],
    },
    {
      id: 9,
      name: 'Sommeliers',
      icon: '&#127863;',
      eventCreation: false,
      children: [
        {
          id: 91,
          name: 'Yancy Dustin',
          color: '#34c8e0',
        },
        {
          id: 92,
          name: 'Sierra Clark',
          color: '#34c8e0',
        },
      ],
    },
  ];
  shifts = [
    //<hide-comment>
    {
      start: dyndatetime('y,m,d-2,2'),
      end: dyndatetime('y,m,d-2,10'),
      title: 'Derek',
      resource: 21,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d-2,2'),
      end: dyndatetime('y,m,d-2,10'),
      title: 'Florence',
      resource: 46,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d-2,8'),
      end: dyndatetime('y,m,d-2,12'),
      title: 'Willis',
      resource: 12,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-2,8'),
      end: dyndatetime('y,m,d-2,12'),
      title: 'Jewell',
      resource: 32,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-2,8'),
      end: dyndatetime('y,m,d-2,12'),
      title: 'Jenifer',
      resource: 42,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-2,8'),
      end: dyndatetime('y,m,d-2,12'),
      title: 'Jon',
      resource: 52,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-2,8'),
      end: dyndatetime('y,m,d-2,12'),
      title: 'Fred',
      resource: 71,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-2,8'),
      end: dyndatetime('y,m,d-2,12'),
      title: 'Adrianna',
      resource: 82,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-2,8'),
      end: dyndatetime('y,m,d-2,12'),
      title: 'Jude',
      resource: 11,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-2,11'),
      end: dyndatetime('y,m,d-2,15'),
      title: 'Jewell',
      resource: 32,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-2,11'),
      end: dyndatetime('y,m,d-2,15'),
      title: 'Gray',
      resource: 45,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-2,11'),
      end: dyndatetime('y,m,d-2,15'),
      title: 'Isadora',
      resource: 54,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-2,11'),
      end: dyndatetime('y,m,d-2,15'),
      title: 'Antonia',
      resource: 72,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-2,11'),
      end: dyndatetime('y,m,d-2,15'),
      title: 'Adrianna',
      resource: 82,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-2,11'),
      end: dyndatetime('y,m,d-2,15'),
      title: 'Leon',
      resource: 84,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-2,11'),
      end: dyndatetime('y,m,d-2,15'),
      title: 'Yancy',
      resource: 91,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-2,16'),
      end: dyndatetime('y,m,d-2,23'),
      title: 'Ryan',
      resource: 13,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-2,16'),
      end: dyndatetime('y,m,d-2,23'),
      title: 'Merv',
      resource: 22,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-2,16'),
      end: dyndatetime('y,m,d-2,23'),
      title: 'Ford',
      resource: 31,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-2,16'),
      end: dyndatetime('y,m,d-2,23'),
      title: 'Dory',
      resource: 33,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-2,16'),
      end: dyndatetime('y,m,d-2,23'),
      title: 'Breanne',
      resource: 41,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-2,16'),
      end: dyndatetime('y,m,d-2,23'),
      title: 'Meredith',
      resource: 51,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-2,16'),
      end: dyndatetime('y,m,d-2,23'),
      title: 'Carlyn',
      resource: 53,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-2,16'),
      end: dyndatetime('y,m,d-2,23'),
      title: 'Layton',
      resource: 61,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-2,16'),
      end: dyndatetime('y,m,d-2,23'),
      title: 'Gerry',
      resource: 73,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-2,16'),
      end: dyndatetime('y,m,d-2,23'),
      title: 'Reg',
      resource: 81,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-2,16'),
      end: dyndatetime('y,m,d-2,23'),
      title: 'Lou',
      resource: 83,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-2,16'),
      end: dyndatetime('y,m,d-2,23'),
      title: 'Sierra',
      resource: 92,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-2,11'),
      end: dyndatetime('y,m,d-2,11,59'),
      title: 'Derek',
      resource: 21,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d-2,11'),
      end: dyndatetime('y,m,d-2,11,59'),
      title: 'Natalie',
      resource: 43,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d-2,11'),
      end: dyndatetime('y,m,d-2,11,59'),
      title: 'Kaylin',
      resource: 44,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d-2,11'),
      end: dyndatetime('y,m,d-2,11,59'),
      title: 'Fred',
      resource: 71,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d-1,2'),
      end: dyndatetime('y,m,d-1,10'),
      title: 'Merv',
      resource: 22,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d-1,2'),
      end: dyndatetime('y,m,d-1,10'),
      title: 'Florence',
      resource: 46,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d-1,8'),
      end: dyndatetime('y,m,d-1,12'),
      title: 'Ryan',
      resource: 13,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-1,8'),
      end: dyndatetime('y,m,d-1,12'),
      title: 'Jewell',
      resource: 32,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-1,8'),
      end: dyndatetime('y,m,d-1,12'),
      title: 'Florence',
      resource: 46,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-1,8'),
      end: dyndatetime('y,m,d-1,12'),
      title: 'Carlyn',
      resource: 53,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-1,8'),
      end: dyndatetime('y,m,d-1,12'),
      title: 'Fred',
      resource: 71,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-1,8'),
      end: dyndatetime('y,m,d-1,12'),
      title: 'Leon',
      resource: 84,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d-1,8'),
      end: dyndatetime('y,m,d-1,12'),
      title: 'Jude',
      resource: 11,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,15'),
      title: 'Ford',
      resource: 31,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,15'),
      title: 'Natalie',
      resource: 43,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,15'),
      title: 'Carlyn',
      resource: 53,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,15'),
      title: 'Gerry',
      resource: 73,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,15'),
      title: 'Lou',
      resource: 83,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,15'),
      title: 'Leon',
      resource: 84,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,15'),
      title: 'Yancy',
      resource: 91,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d-1,16'),
      end: dyndatetime('y,m,d-1,23'),
      title: 'Willis',
      resource: 12,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-1,16'),
      end: dyndatetime('y,m,d-1,23'),
      title: 'Merv',
      resource: 22,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-1,16'),
      end: dyndatetime('y,m,d-1,23'),
      title: 'Jewell',
      resource: 32,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-1,16'),
      end: dyndatetime('y,m,d-1,23'),
      title: 'Dory',
      resource: 33,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-1,16'),
      end: dyndatetime('y,m,d-1,23'),
      title: 'Gray',
      resource: 45,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-1,16'),
      end: dyndatetime('y,m,d-1,23'),
      title: 'Jon',
      resource: 52,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-1,16'),
      end: dyndatetime('y,m,d-1,23'),
      title: 'Isadora',
      resource: 54,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-1,16'),
      end: dyndatetime('y,m,d-1,23'),
      title: 'Layton',
      resource: 61,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-1,16'),
      end: dyndatetime('y,m,d-1,23'),
      title: 'Antonia',
      resource: 72,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-1,16'),
      end: dyndatetime('y,m,d-1,23'),
      title: 'Reg',
      resource: 81,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-1,16'),
      end: dyndatetime('y,m,d-1,23'),
      title: 'Lou',
      resource: 83,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-1,16'),
      end: dyndatetime('y,m,d-1,23'),
      title: 'Sierra',
      resource: 92,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,11,59'),
      title: 'Derek',
      resource: 21,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,11,59'),
      title: 'Natalie',
      resource: 43,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,11,59'),
      title: 'Kaylin',
      resource: 44,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,11,59'),
      title: 'Fred',
      resource: 71,
      slot: 5,
    }, //</hide-comment>
    {
      start: dyndatetime('y,m,d,2'),
      end: dyndatetime('y,m,d,10'),
      title: 'Derek',
      resource: 21,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d,2'),
      end: dyndatetime('y,m,d,10'),
      title: 'Florence',
      resource: 46,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Willis',
      resource: 12,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Jewell',
      resource: 32,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Jenifer',
      resource: 42,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Jon',
      resource: 52,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Fred',
      resource: 71,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Adrianna',
      resource: 82,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,12'),
      title: 'Jude',
      resource: 11,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d,11'),
      end: dyndatetime('y,m,d,15'),
      title: 'Jewell',
      resource: 32,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d,11'),
      end: dyndatetime('y,m,d,15'),
      title: 'Gray',
      resource: 45,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d,11'),
      end: dyndatetime('y,m,d,15'),
      title: 'Isadora',
      resource: 54,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d,11'),
      end: dyndatetime('y,m,d,15'),
      title: 'Antonia',
      resource: 72,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d,11'),
      end: dyndatetime('y,m,d,15'),
      title: 'Adrianna',
      resource: 82,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d,11'),
      end: dyndatetime('y,m,d,15'),
      title: 'Leon',
      resource: 84,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d,11'),
      end: dyndatetime('y,m,d,15'),
      title: 'Yancy',
      resource: 91,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,23'),
      title: 'Ryan',
      resource: 13,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,23'),
      title: 'Merv',
      resource: 22,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,23'),
      title: 'Ford',
      resource: 31,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,23'),
      title: 'Dory',
      resource: 33,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,23'),
      title: 'Breanne',
      resource: 41,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,23'),
      title: 'Meredith',
      resource: 51,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,23'),
      title: 'Carlyn',
      resource: 53,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,23'),
      title: 'Layton',
      resource: 61,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,23'),
      title: 'Gerry',
      resource: 73,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,23'),
      title: 'Reg',
      resource: 81,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,23'),
      title: 'Lou',
      resource: 83,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d,16'),
      end: dyndatetime('y,m,d,23'),
      title: 'Sierra',
      resource: 92,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d,11'),
      end: dyndatetime('y,m,d,11,59'),
      title: 'Derek',
      resource: 21,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d,11'),
      end: dyndatetime('y,m,d,11,59'),
      title: 'Natalie',
      resource: 43,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d,11'),
      end: dyndatetime('y,m,d,11,59'),
      title: 'Kaylin',
      resource: 44,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d,11'),
      end: dyndatetime('y,m,d,11,59'),
      title: 'Fred',
      resource: 71,
      slot: 5,
    }, //<hide-comment>
    {
      start: dyndatetime('y,m,d+1,2'),
      end: dyndatetime('y,m,d+1,10'),
      title: 'Theo',
      resource: 23,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d+1,2'),
      end: dyndatetime('y,m,d+1,10'),
      title: 'Jenifer',
      resource: 42,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,12'),
      title: 'Jude',
      resource: 11,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,12'),
      title: 'Jewell',
      resource: 32,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,12'),
      title: 'Florence',
      resource: 46,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,12'),
      title: 'Jon',
      resource: 52,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,12'),
      title: 'Gerry',
      resource: 73,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,12'),
      title: 'Adrianna',
      resource: 82,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+1,8'),
      end: dyndatetime('y,m,d+1,12'),
      title: 'Jude',
      resource: 11,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,15'),
      title: 'Dory',
      resource: 33,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,15'),
      title: 'Natalie',
      resource: 43,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,15'),
      title: 'Meredith',
      resource: 51,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,15'),
      title: 'Fred',
      resource: 71,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,15'),
      title: 'Lou',
      resource: 83,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,15'),
      title: 'Leon',
      resource: 84,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,15'),
      title: 'Sierra',
      resource: 92,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,23'),
      title: 'Willis',
      resource: 12,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,23'),
      title: 'Derek',
      resource: 21,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,23'),
      title: 'Ford',
      resource: 31,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,23'),
      title: 'Dory',
      resource: 33,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,23'),
      title: 'Kaylin',
      resource: 44,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,23'),
      title: 'Meredith',
      resource: 51,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,23'),
      title: 'Isadora',
      resource: 54,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,23'),
      title: 'Sylvia',
      resource: 62,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,23'),
      title: 'Antonia',
      resource: 72,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,23'),
      title: 'Reg',
      resource: 81,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,23'),
      title: 'Lou',
      resource: 83,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,23'),
      title: 'Sierra',
      resource: 92,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,11,59'),
      title: 'Derek',
      resource: 21,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,11,59'),
      title: 'Natalie',
      resource: 43,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,11,59'),
      title: 'Kaylin',
      resource: 44,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,11,59'),
      title: 'Fred',
      resource: 71,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+2,2'),
      end: dyndatetime('y,m,d+2,10'),
      title: 'Merv',
      resource: 22,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d+2,2'),
      end: dyndatetime('y,m,d+2,10'),
      title: 'Florence',
      resource: 46,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d+2,8'),
      end: dyndatetime('y,m,d+2,12'),
      title: 'Ryan',
      resource: 13,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+2,8'),
      end: dyndatetime('y,m,d+2,12'),
      title: 'Jewell',
      resource: 32,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+2,8'),
      end: dyndatetime('y,m,d+2,12'),
      title: 'Florence',
      resource: 46,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+2,8'),
      end: dyndatetime('y,m,d+2,12'),
      title: 'Carlyn',
      resource: 53,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+2,8'),
      end: dyndatetime('y,m,d+2,12'),
      title: 'Fred',
      resource: 71,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+2,8'),
      end: dyndatetime('y,m,d+2,12'),
      title: 'Leon',
      resource: 84,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+2,8'),
      end: dyndatetime('y,m,d+2,12'),
      title: 'Jude',
      resource: 11,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+2,11'),
      end: dyndatetime('y,m,d+2,15'),
      title: 'Ford',
      resource: 31,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+2,11'),
      end: dyndatetime('y,m,d+2,15'),
      title: 'Natalie',
      resource: 43,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+2,11'),
      end: dyndatetime('y,m,d+2,15'),
      title: 'Carlyn',
      resource: 53,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+2,11'),
      end: dyndatetime('y,m,d+2,15'),
      title: 'Gerry',
      resource: 73,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+2,11'),
      end: dyndatetime('y,m,d+2,15'),
      title: 'Lou',
      resource: 83,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+2,11'),
      end: dyndatetime('y,m,d+2,15'),
      title: 'Leon',
      resource: 84,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+2,11'),
      end: dyndatetime('y,m,d+2,15'),
      title: 'Yancy',
      resource: 91,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+2,16'),
      end: dyndatetime('y,m,d+2,23'),
      title: 'Willis',
      resource: 12,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+2,16'),
      end: dyndatetime('y,m,d+2,23'),
      title: 'Merv',
      resource: 22,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+2,16'),
      end: dyndatetime('y,m,d+2,23'),
      title: 'Jewell',
      resource: 32,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+2,16'),
      end: dyndatetime('y,m,d+2,23'),
      title: 'Dory',
      resource: 33,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+2,16'),
      end: dyndatetime('y,m,d+2,23'),
      title: 'Gray',
      resource: 45,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+2,16'),
      end: dyndatetime('y,m,d+2,23'),
      title: 'Jon',
      resource: 52,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+2,16'),
      end: dyndatetime('y,m,d+2,23'),
      title: 'Isadora',
      resource: 54,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+2,16'),
      end: dyndatetime('y,m,d+2,23'),
      title: 'Layton',
      resource: 61,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+2,16'),
      end: dyndatetime('y,m,d+2,23'),
      title: 'Antonia',
      resource: 72,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+2,16'),
      end: dyndatetime('y,m,d+2,23'),
      title: 'Reg',
      resource: 81,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+2,16'),
      end: dyndatetime('y,m,d+2,23'),
      title: 'Lou',
      resource: 83,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+2,16'),
      end: dyndatetime('y,m,d+2,23'),
      title: 'Sierra',
      resource: 92,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+2,11'),
      end: dyndatetime('y,m,d+2,11,59'),
      title: 'Derek',
      resource: 21,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+2,11'),
      end: dyndatetime('y,m,d+2,11,59'),
      title: 'Natalie',
      resource: 43,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+2,11'),
      end: dyndatetime('y,m,d+2,11,59'),
      title: 'Kaylin',
      resource: 44,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+2,11'),
      end: dyndatetime('y,m,d+2,11,59'),
      title: 'Fred',
      resource: 71,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+3,2'),
      end: dyndatetime('y,m,d+3,10'),
      title: 'Derek',
      resource: 21,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d+3,2'),
      end: dyndatetime('y,m,d+3,10'),
      title: 'Florence',
      resource: 46,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d+3,8'),
      end: dyndatetime('y,m,d+3,12'),
      title: 'Willis',
      resource: 12,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+3,8'),
      end: dyndatetime('y,m,d+3,12'),
      title: 'Jewell',
      resource: 32,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+3,8'),
      end: dyndatetime('y,m,d+3,12'),
      title: 'Jenifer',
      resource: 42,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+3,8'),
      end: dyndatetime('y,m,d+3,12'),
      title: 'Jon',
      resource: 52,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+3,8'),
      end: dyndatetime('y,m,d+3,12'),
      title: 'Fred',
      resource: 71,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+3,8'),
      end: dyndatetime('y,m,d+3,12'),
      title: 'Adrianna',
      resource: 82,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+3,8'),
      end: dyndatetime('y,m,d+3,12'),
      title: 'Jude',
      resource: 11,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+3,11'),
      end: dyndatetime('y,m,d+3,15'),
      title: 'Jewell',
      resource: 32,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+3,11'),
      end: dyndatetime('y,m,d+3,15'),
      title: 'Gray',
      resource: 45,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+3,11'),
      end: dyndatetime('y,m,d+3,15'),
      title: 'Isadora',
      resource: 54,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+3,11'),
      end: dyndatetime('y,m,d+3,15'),
      title: 'Antonia',
      resource: 72,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+3,11'),
      end: dyndatetime('y,m,d+3,15'),
      title: 'Adrianna',
      resource: 82,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+3,11'),
      end: dyndatetime('y,m,d+3,15'),
      title: 'Leon',
      resource: 84,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+3,11'),
      end: dyndatetime('y,m,d+3,15'),
      title: 'Yancy',
      resource: 91,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+3,16'),
      end: dyndatetime('y,m,d+3,23'),
      title: 'Ryan',
      resource: 13,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+3,16'),
      end: dyndatetime('y,m,d+3,23'),
      title: 'Merv',
      resource: 22,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+3,16'),
      end: dyndatetime('y,m,d+3,23'),
      title: 'Ford',
      resource: 31,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+3,16'),
      end: dyndatetime('y,m,d+3,23'),
      title: 'Dory',
      resource: 33,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+3,16'),
      end: dyndatetime('y,m,d+3,23'),
      title: 'Breanne',
      resource: 41,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+3,16'),
      end: dyndatetime('y,m,d+3,23'),
      title: 'Meredith',
      resource: 51,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+3,16'),
      end: dyndatetime('y,m,d+3,23'),
      title: 'Carlyn',
      resource: 53,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+3,16'),
      end: dyndatetime('y,m,d+3,23'),
      title: 'Layton',
      resource: 61,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+3,16'),
      end: dyndatetime('y,m,d+3,23'),
      title: 'Gerry',
      resource: 73,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+3,16'),
      end: dyndatetime('y,m,d+3,23'),
      title: 'Reg',
      resource: 81,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+3,16'),
      end: dyndatetime('y,m,d+3,23'),
      title: 'Lou',
      resource: 83,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+3,16'),
      end: dyndatetime('y,m,d+3,23'),
      title: 'Sierra',
      resource: 92,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+3,11'),
      end: dyndatetime('y,m,d+3,11,59'),
      title: 'Derek',
      resource: 21,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+3,11'),
      end: dyndatetime('y,m,d+3,11,59'),
      title: 'Natalie',
      resource: 43,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+3,11'),
      end: dyndatetime('y,m,d+3,11,59'),
      title: 'Kaylin',
      resource: 44,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+3,11'),
      end: dyndatetime('y,m,d+3,11,59'),
      title: 'Fred',
      resource: 71,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+4,2'),
      end: dyndatetime('y,m,d+4,10'),
      title: 'Theo',
      resource: 23,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d+4,2'),
      end: dyndatetime('y,m,d+4,10'),
      title: 'Jenifer',
      resource: 42,
      slot: 1,
    },
    {
      start: dyndatetime('y,m,d+4,8'),
      end: dyndatetime('y,m,d+4,12'),
      title: 'Jude',
      resource: 11,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+4,8'),
      end: dyndatetime('y,m,d+4,12'),
      title: 'Jewell',
      resource: 32,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+4,8'),
      end: dyndatetime('y,m,d+4,12'),
      title: 'Florence',
      resource: 46,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+4,8'),
      end: dyndatetime('y,m,d+4,12'),
      title: 'Jon',
      resource: 52,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+4,8'),
      end: dyndatetime('y,m,d+4,12'),
      title: 'Gerry',
      resource: 73,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+4,8'),
      end: dyndatetime('y,m,d+4,12'),
      title: 'Adrianna',
      resource: 82,
      slot: 2,
    },
    {
      start: dyndatetime('y,m,d+4,8'),
      end: dyndatetime('y,m,d+4,12'),
      title: 'Jude',
      resource: 11,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+4,11'),
      end: dyndatetime('y,m,d+4,15'),
      title: 'Dory',
      resource: 33,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+4,11'),
      end: dyndatetime('y,m,d+4,15'),
      title: 'Natalie',
      resource: 43,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+4,11'),
      end: dyndatetime('y,m,d+4,15'),
      title: 'Meredith',
      resource: 51,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+4,11'),
      end: dyndatetime('y,m,d+4,15'),
      title: 'Fred',
      resource: 71,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+4,11'),
      end: dyndatetime('y,m,d+4,15'),
      title: 'Lou',
      resource: 83,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+4,11'),
      end: dyndatetime('y,m,d+4,15'),
      title: 'Leon',
      resource: 84,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+4,11'),
      end: dyndatetime('y,m,d+4,15'),
      title: 'Sierra',
      resource: 92,
      slot: 3,
    },
    {
      start: dyndatetime('y,m,d+4,16'),
      end: dyndatetime('y,m,d+4,23'),
      title: 'Willis',
      resource: 12,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+4,16'),
      end: dyndatetime('y,m,d+4,23'),
      title: 'Derek',
      resource: 21,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+4,16'),
      end: dyndatetime('y,m,d+4,23'),
      title: 'Ford',
      resource: 31,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+4,16'),
      end: dyndatetime('y,m,d+4,23'),
      title: 'Dory',
      resource: 33,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+4,16'),
      end: dyndatetime('y,m,d+4,23'),
      title: 'Kaylin',
      resource: 44,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+4,16'),
      end: dyndatetime('y,m,d+4,23'),
      title: 'Meredith',
      resource: 51,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+4,16'),
      end: dyndatetime('y,m,d+4,23'),
      title: 'Isadora',
      resource: 54,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+4,16'),
      end: dyndatetime('y,m,d+4,23'),
      title: 'Sylvia',
      resource: 62,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+4,16'),
      end: dyndatetime('y,m,d+4,23'),
      title: 'Antonia',
      resource: 72,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+4,16'),
      end: dyndatetime('y,m,d+4,23'),
      title: 'Reg',
      resource: 81,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+4,16'),
      end: dyndatetime('y,m,d+4,23'),
      title: 'Lou',
      resource: 83,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+4,16'),
      end: dyndatetime('y,m,d+4,23'),
      title: 'Sierra',
      resource: 92,
      slot: 4,
    },
    {
      start: dyndatetime('y,m,d+4,11'),
      end: dyndatetime('y,m,d+4,11,59'),
      title: 'Derek',
      resource: 21,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+4,11'),
      end: dyndatetime('y,m,d+4,11,59'),
      title: 'Natalie',
      resource: 43,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+4,11'),
      end: dyndatetime('y,m,d+4,11,59'),
      title: 'Kaylin',
      resource: 44,
      slot: 5,
    },
    {
      start: dyndatetime('y,m,d+4,11'),
      end: dyndatetime('y,m,d+4,11,59'),
      title: 'Fred',
      resource: 71,
      slot: 5,
    }, //</hide-comment>
  ];

  shiftTimes = [
    {
      id: 1,
      name: 'Night',
      checked: true,
      disabled: false,
    },
    {
      id: 2,
      name: 'Breakfast',
      checked: true,
      disabled: false,
    },
    {
      id: 3,
      name: 'Lunch',
      checked: true,
      disabled: false,
    },
    {
      id: 4,
      name: 'Dinner',
      checked: true,
      disabled: false,
    },
    {
      id: 5,
      name: 'After hours',
      checked: true,
      disabled: false,
    },
  ];

  slots = defaultSlots;

  views = [
    {
      text: 'Day',
      value: 'day',
    },
    {
      text: 'Week',
      value: 'week',
    },
  ];

  viewType = 'week';

  calView: any = {
    timeline: {
      type: 'week',
      eventList: true,
      startDay: 1,
      endDay: 5,
    },
  };

  empty = '&#x1f636; empty...';

  calendarOptions: MbscEventcalendarOptions = {
    resources: this.resources,
    clickToCreate: true,
    dragToMove: true,
    extendDefaultEvent: (event: any) => ({
      title: this.getEmployeeName(event),
    }),
    onEventCreate: (args: any, inst: any) => {
      if (this.isDouble(args.event, inst)) {
        return false;
      } else {
        setTimeout(() => {
          this.shifts = [...this.shifts, args.event];
        });
        return true;
      }
    },
    onEventDeleted: (args: any) => {
      setTimeout(() => {
        this.shifts = this.shifts.filter((s: any) => s.id !== args.event.id);
      });
    },
    onEventUpdate: (args: any, inst: any) => {
      const event = args.event;
      if (this.isDouble(event, inst)) {
        return false;
      }
      const newName = this.getEmployeeName(event);
      if (newName) {
        const index = this.shifts.findIndex((x: any) => x.id === event.id);
        this.shifts[index].title = newName;
      }
      return true;
    },
  };

  isDouble(event: any, inst: any): any {
    const date = event.start.setHours(0);
    const events = inst.getEvents(date);
    const ev = events.find((e: any) => new Date(e.start).setHours(0) === date && e.resource === event.resource && e.slot === event.slot);
    return ev;
  }

  getEmployeeName(event: any): any {
    for (const resource of this.resources) {
      if (resource.children) {
        for (const employee of resource.children) {
          if (employee.id === event.resource) {
            return employee.name.substring(0, employee.name.indexOf(' '));
          }
        }
      }
    }
  }

  getShiftsNrs(date: any, slotId: number): any {
    const shiftList: any = [];
    for (const shift of this.shifts) {
      // get slot id from resource id
      const resourceNr = +shift.resource.toString().charAt(0);
      if (shift.slot === slotId && date === this.formatMyDate(shift.start)) {
        shiftList[resourceNr - 1] = (shiftList[resourceNr - 1] || 0) + 1;
      }
    }
    return shiftList;
  }

  formatMyDate(date: any): any {
    return formatDate('YYYY-MM-DD', new Date(date));
  }

  checkboxChange(): void {
    const filteredSlots: any = [];

    for (const slot of defaultSlots) {
      if (this.shiftTimes.find((us: { id: number; checked: any }) => us.id === slot.id && us.checked)) {
        filteredSlots.push(slot);
      }
    }

    if (filteredSlots.length === 1) {
      this.shiftTimes = this.shiftTimes.map((ut) => (ut.checked ? { ...ut, disabled: true } : ut));
    } else {
      this.shiftTimes = this.shiftTimes.map((ut) => ({ ...ut, disabled: false }));
    }

    this.slots = filteredSlots;
  }

  viewChange(ev: any): void {
    this.calView =
      ev.value === 'day'
        ? {
            timeline: {
              type: 'day',
              eventList: true,
            },
          }
        : {
            timeline: {
              type: 'week',
              eventList: true,
              startDay: 1,
              endDay: 5,
            },
          };
  }
}
