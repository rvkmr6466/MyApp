import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../app.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
	declarations: [
		ProductsComponent
	],
	imports: [
		BrowserModule,
	],
	providers: [
	],
	exports: [

	]
})
export class FeaturesModule extends AppModule{ }
