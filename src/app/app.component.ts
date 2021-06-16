import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public isLogin: boolean = false;

	ngOnInit() {
	}

	sampleFunc(){
		console.log("Example");
	}
}
