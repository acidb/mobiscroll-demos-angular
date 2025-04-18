import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { print } from '@mobiscroll/print';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-eventcalendar-printing-the-view',
  templateUrl: './printing-the-view.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @ViewChild('mycal', { static: false })
  inst!: MbscEventcalendar;

  calendarModules = [print];

  myEvents: MbscCalendarEvent[] = [];

  printView(): void {
    this.inst.print();
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
