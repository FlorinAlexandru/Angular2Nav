import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    template: `
    <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        Start Bootstrap
                    </a>
                </li>
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a [routerLink]="['/expenses']">Expenses</a>
                </li>
                <li>
                    <a href="#">Incoms</a>
                </li>
                <li>
                    <a [routerLink]="['/reports']">Reports</a>
                </li>
                <li>
                    <a [routerLink]="['/about']">About</a>
                </li>
                <li>
                    <a [routerLink]="['/contact']">Contact</a>
                </li>
            </ul>
        </div>

        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <router-outlet></router-outlet>
                    </div>
                </div>
            </div>
        </div>     
    </div>
        `
})
export class AppComponent { }
