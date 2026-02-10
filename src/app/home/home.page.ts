import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import {
  ScheduleModule,
  ScheduleComponent,
  EventSettingsModel,

  // View services
  DayService, WeekService, WorkWeekService, MonthService, AgendaService,

  // Feature services (IMPORTANT for drag/resize)
  DragAndDropService, ResizeService
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, ScheduleModule],

  // Inject views + drag/drop + resize services
  providers: [
    DayService, WeekService, WorkWeekService, MonthService, AgendaService
  ],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Syncfusion Scheduler</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ejs-schedule
        #schedule
        width="100%"
        height="650px"
        [selectedDate]="selectedDate"
        [views]="views"
        [eventSettings]="eventSettings"
      >
      </ejs-schedule>
    </ion-content>
  `
})
export class HomePage {
  @ViewChild('schedule', { static: true }) public scheduleObj!: ScheduleComponent;

  public selectedDate: Date = new Date();
  public views: string[] = ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'];

  public events: object[] = [
    {
      Id: 1,
      Subject: 'Meeting',
      StartTime: new Date(new Date().setHours(10, 0, 0, 0)),
      EndTime: new Date(new Date().setHours(10, 30, 0, 0))
    },
    {
      Id: 2,
      Subject: 'Planning',
      StartTime: new Date(new Date().setHours(12, 0, 0, 0)),
      EndTime: new Date(new Date().setHours(13, 0, 0, 0))
    }
  ];

  public eventSettings: EventSettingsModel = { dataSource: this.events };


}