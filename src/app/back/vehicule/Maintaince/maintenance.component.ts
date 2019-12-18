import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {VehiculeMaintenance} from '../../../models/VehiculeMaintenance';
import {StorageService} from '../../../services/security/storage.service';
import {HttpClient} from '@angular/common/http';
import 'fullcalendar';
import {Events} from '../../../models/events';
import {MaintenanceService} from '../../../services/managers/maintenance.service';
import {FullCalendarComponent} from '@fullcalendar/angular';
import {EventInput} from '@fullcalendar/core/structs/event';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {ActivatedRoute} from '@angular/router'; // for dateClick

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
})
export class MaintenanceComponent implements OnInit {

  allM: VehiculeMaintenance[];
  Events: Events[];
  tab = [];
  allMaintains: VehiculeMaintenance[];
  calendr: any;


  constructor(
    private storageService: StorageService,
    private maintenanceService: MaintenanceService,
    private http: HttpClient,
    private route: ActivatedRoute) {
    this.calendr = this.route.snapshot.data['listM'];
  }

  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = this.Events;


  ngOnInit() {
    this.fetchData();
    this.getItems();

  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      });
    }
  }

  fetchData() {
    // @ts-ignore
    this.maintenanceService.getAllMaint<VehiculeMaintenance[]>().subscribe(
      response => {
        this.allMaintains = response;
      },
      error => {
      }
    );
  }

  getItems() {
    for (let int = 0; int < this.calendr.length; int++) {
      const cl = this.calendr.pop();
      this.tab.push({
          id: cl.vehicule.id,
          title: cl.vehicule.plate,
          start: cl.maintainceDate
        }
      );
    }
    this.Events = this.tab;
  }


  ApproveMaint(m: VehiculeMaintenance) {
    if (confirm('Are you sure to approve this maintance')) {
      this.maintenanceService.approveMaint(m.id).subscribe(
        response => {
          this.fetchData();

        },
        error => {
          console.log(error);
        }
      );
    }
  }


}
