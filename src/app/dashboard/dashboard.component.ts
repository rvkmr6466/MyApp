import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

import { Calendar, CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends AppComponent {
	// references the #calendar in the template
	@ViewChild('calendar') calendarComponent: FullCalendarComponent;


	constructor() {
		super();
	}

	ngOnInit(): void {
	}

	calendar = {
		initialView: 'timeGridWeek',
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,listWeek'
		}
	};


	/* calendar1 = new Calendar(calendarEl, {
		plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ],
		header: {
		  left: 'prev,next today',
		  center: 'title',
		  right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
		},
		defaultDate: '2018-01-12',
		navLinks: true, // can click day/week names to navigate views
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		events: [
		  {
			title: 'All Day Event',
			start: '2018-01-01',
		  },
		  {
			title: 'Long Event',
			start: '2018-01-07',
			end: '2018-01-10'
		  },

		  {
			title: 'Repeating Event',
			start: '2018-01-16T16:00:00'
		  },
		  {
			title: 'Conference',
			start: '2018-01-11',
			end: '2018-01-13'
		  },
		  {
			title: 'Meeting',
			start: '2018-01-12T10:30:00',
			end: '2018-01-12T12:30:00'
		  },
		  {
			title: 'Lunch',
			start: '2018-01-12T12:00:00'
		  },
		  {
			title: 'Meeting',
			start: '2018-01-12T14:30:00'
		  },
		  {
			title: 'Happy Hour',
			start: '2018-01-12T17:30:00'
		  },
		  {
			title: 'Dinner',
			start: '2018-01-12T20:00:00'
		  },
		  {
			title: 'Birthday Party',
			start: '2018-01-13T07:00:00'
		  },
		  {
			title: 'Click for Google',
			url: 'http://google.com/',
			start: '2018-01-28'
		  }
		]
	  }); */


	calendarOptions: CalendarOptions = {
		initialView: 'dayGridMonth',
		dateClick: this.handleDateClick.bind(this), // bind is important!
		events: [
			{ title: 'event 1', date: '2019-04-01' },
			{ title: 'event 2', date: '2019-04-02' }
		]
	};


	handleDateClick(arg) {
		alert('date click! ' + arg.dateStr)
	}


	someMethod() {
		let calendarApi = this.calendarComponent.getApi();
		calendarApi.next();
	}

}
