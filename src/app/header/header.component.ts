import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppComponent } from '../app.component';
import { AuthenticationService } from '../shared-services/authentication.service';
import { CentralService } from '../shared-services/central.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends AppComponent {
	public isAuthenticated: boolean = true	//false;
	public userSubs: Subscription;
	public isSideNavOpen: boolean = false;
	public sideNavbar = true;
	showProducts: boolean = false;

	constructor(
		private authService: AuthenticationService,
		private centralService: CentralService
	) {
		super();
	}

	ngOnInit(): void {
		// this.userSubs = this.authService.user.subscribe(user => {
		// 	this.isAuthenticated = !!user;
		// });
		console.log("User Subscribed.");
		var clickEvent = document.querySelector(".nav-link");
		// clickEvent.onclick = function () { this.showProducts = false; }
	}

	ngOnDestroy() {
		this.userSubs.unsubscribe();
	}

	openSideNavbar() {
		this.isSideNavOpen = this.centralService.isSideNavOpen;
		console.log("Button Clicked.");
	}

	sideNavbarOpen() {
		this.sideNavbar = !!this.sideNavbar;
	}
}
