import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	@Input() showProducts: boolean = false;
	
	constructor() { }

	ngOnInit(): void {
	}

}
