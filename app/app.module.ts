import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ReportsComponent } from './reports/reports.component';
import { AboutComponent } from './about/about.component';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: 'contact', component: ContactComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'expense', component: ExpenseComponent },
      { path: '', redirectTo: 'contact', pathMatch: 'full'}
    ], {useHash: true})
    ],
  declarations: [ 
    AppComponent,
    ContactComponent,
    ReportsComponent,
    AboutComponent,
    ExpenseComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
