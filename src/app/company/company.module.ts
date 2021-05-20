import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyService } from './company.service';
import { canActivateGuard } from '../login/can-activate.guard';
import { AddCompanyComponent } from './add-company/add-company.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CompanyHomeComponent },
  { path: 'detail/:id', canActivate: [canActivateGuard], component: CompanyDetailComponent }
];


@NgModule({
  declarations: [CompanyHomeComponent, CompanyDetailComponent, CompanyListComponent, AddCompanyComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [CompanyService]   //provide service for specific feature module
})
export class CompanyModule { }
