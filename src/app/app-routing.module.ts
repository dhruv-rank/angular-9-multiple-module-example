import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomLoadModuleStrategyService } from './custom-load-module-strategy.service';
import { canActivateGuard } from './login/can-activate.guard';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'employee', canActivate: [canActivateGuard], loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomLoadModuleStrategyService })],  //this will only load the module in background which has path 'company'  
  exports: [RouterModule]
})
export class AppRoutingModule { }
