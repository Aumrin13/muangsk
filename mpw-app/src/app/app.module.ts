import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RightNavbarComponent } from './right-navbar/right-navbar.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { FooterComponent } from './footer/footer.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { CarRepairComponent } from './car-repair/car-repair.component';
import { ReportComponent } from './report/report.component';
import { DriverComponent } from './driver/driver.component';
import { DriverRecordComponent } from './driver-record/driver-record.component';
import { CarScheduleComponent } from './car-schedule/car-schedule.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    RightNavbarComponent,
    SidebarMenuComponent,
    FooterComponent,
    CarInfoComponent,
    CarRepairComponent,
    ReportComponent,
    DriverComponent,
    DriverRecordComponent,
    CarScheduleComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
