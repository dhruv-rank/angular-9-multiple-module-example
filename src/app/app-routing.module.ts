import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { CustomLoadModuleStrategyService } from './custom-load-module-strategy.service';
import { canActivateGuard } from './login/can-activate.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CommonComponent },
  { path: 'cmp', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'emp', canActivate: [canActivateGuard], loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomLoadModuleStrategyService })],  //this will only load the module in background which has path 'cmp'  
  exports: [RouterModule]
})
export class AppRoutingModule { }
