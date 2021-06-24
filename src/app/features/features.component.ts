import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
	selector: 'app-features',
	templateUrl: './features.component.html',
	styleUrls: ['./features.component.scss']
})
export class FeaturesComponent extends AppComponent {
	@Input() showProducts: boolean = false;

	constructor(
		private router: Router
	) {
		super();
	}

	ngOnInit(): void {
		this.showProducts = false;
	}

	showProductsComponent() {
		this.showProducts = true;
		this.router.navigate(['/features/products']);
	}
}
