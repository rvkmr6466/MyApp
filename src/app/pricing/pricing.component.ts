import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
	selector: 'app-pricing',
	templateUrl: './pricing.component.html',
	styleUrls: ['./pricing.component.scss']
})
export class PricingComponent extends AppComponent {

	constructor() {
		super();
	}

	ngOnInit(): void {
	}

}
