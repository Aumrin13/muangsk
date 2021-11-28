import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarInfoComponent } from './car-info/car-info.component';
import { CarRepairComponent } from './car-repair/car-repair.component';
import { CarScheduleComponent } from './car-schedule/car-schedule.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriverRecordComponent } from './driver-record/driver-record.component';
import { DriverComponent } from './driver/driver.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [

  {path:'Dashboard',
  component: DashboardComponent
},
{
  path:'CarSchedule',
  component:CarScheduleComponent
},
{
  path:'CarRepair',
  component:CarRepairComponent
},
{
  path:'CarInfo',
  component:CarInfoComponent
}
,
{
  path:'Driver',
  component:DriverComponent
}
,
{
  path:'DriverRecord',
  component:DriverRecordComponent
}
,
{
  path:'Report',
  component:ReportComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
