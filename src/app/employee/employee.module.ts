import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [EmployeeHomeComponent, EmployeeDetailComponent, EmployeeListComponent, AddEmployeeComponent],   //declare components,directives,pipes here which are specific to this feature module   
  imports: [
    CommonModule,
    SharedModule,
    EmployeeRoutingModule
  ],
  exports: [],
  providers:[EmployeeService]
})
export class EmployeeModule { }
