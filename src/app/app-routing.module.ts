import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features/features.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PricingComponent } from './pricing/pricing.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
	{
		path: 'home-page',
		component: HomePageComponent,
		// loadChildren: () => import('./home-page/').then(m => m.ItemsModule)
	},
	{
		path: 'features',
		component: FeaturesComponent
	},
	{
		path: 'pricing',
		component: PricingComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'login-form',
		component: LoginFormComponent
	},
	{
		path: 'reset-password',
		component: ResetPasswordComponent
	},
	{
		path: 'register-form',
		component: RegisterFormComponent
		//loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
	},
	{
		path: '**',
		component: HomePageComponent,

	}
	/* {
		path: 'crisis-center',
		component: CrisisCenterComponent,
		children: [
			{
				path: '',
				component: CrisisListComponent,
				children: [
					{
						path: ':id',
						component: CrisisDetailComponent,
						canDeactivate: [CanDeactivateGuard]
					},
					{
						path: '',
						component: CrisisCenterHomeComponent
					}
				]
			}
		]
	} */
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
