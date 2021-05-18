import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeRoutingModule } from './employee-routing.module';


@NgModule({
  declarations: [EmployeeHomeComponent, EmployeeDetailComponent],   //declare components,directives,pipes here which are specific to this feature module   
  imports: [
    CommonModule,
    SharedModule,
    EmployeeRoutingModule
  ],
  exports: []
})
export class EmployeeModule { }
