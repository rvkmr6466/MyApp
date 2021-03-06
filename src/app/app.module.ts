import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AuthenticationService } from './shared-services/authentication.service';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CentralService } from './shared-services/central.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { ProductsComponent } from './features/products/products.component'; // a plugin!

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
	dayGridPlugin,
	interactionPlugin,
	timeGridPlugin
]);

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		LoginFormComponent,
		RegisterFormComponent,
		HomePageComponent,
		ResetPasswordComponent,
		FeaturesComponent,
		PricingComponent,
		DashboardComponent,
		ProductsComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatSidenavModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatIconModule,
		FullCalendarModule,
	],
	providers: [
		AuthenticationService,
		CentralService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
