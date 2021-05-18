import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', component: EmployeeHomeComponent },
    { path: 'detail', component: EmployeeDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule {

}