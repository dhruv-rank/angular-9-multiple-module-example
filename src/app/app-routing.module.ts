import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { CustomLoadModuleStrategyService } from './custom-load-module-strategy.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: CommonComponent },
  { path: 'cmp', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'emp', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomLoadModuleStrategyService })],  //this will load the lazyloaded module in background with path  'cmp' 
  exports: [RouterModule]
})
export class AppRoutingModule { }
