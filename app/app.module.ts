import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ReportsComponent } from './reports/reports.component';
import { AboutComponent } from './about/about.component';
import { ExpenseComponent } from './expense/expense.component';
import { NavComponent } from './nav/nav.component' ;
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: 'contact', component: ContactComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'expenses', component: ExpenseComponent },
      { path: 'dashboard', component: DashboardComponent},
      { path: '', redirectTo: 'contact', pathMatch: 'full'}
    ], {useHash: true})
    ],
  declarations: [ 
    AppComponent,
    ContactComponent,
    ReportsComponent,
    AboutComponent,
    ExpenseComponent,
    NavComponent,
    DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
