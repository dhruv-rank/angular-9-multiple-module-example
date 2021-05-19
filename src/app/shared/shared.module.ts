import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonComponent } from '../common/common.component';

const components = [HeaderComponent, FooterComponent,CommonComponent];  //reusable components, pipes, and directives ,that we are going to use in whole application



@NgModule({
  declarations: [ ...components],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule         //In which feature of application we want these pre-built modules we can simply impport this module it in  that fearture's module
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...components             //export them so we can use these components where we import this module
  ],
  providers:[]
})
export class SharedModule { }
