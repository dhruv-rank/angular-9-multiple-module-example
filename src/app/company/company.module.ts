import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CompanyHomeComponent },
  { path: 'detail', component: CompanyDetailComponent }
];


@NgModule({
  declarations: [CompanyHomeComponent, CompanyDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CompanyModule { }
