import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends AppComponent {

	constructor() {
		super();
	}

	ngOnInit(): void {
	}

}
