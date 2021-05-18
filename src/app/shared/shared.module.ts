import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const components = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...components],//reusable components, pipes, and directives
                                //that we are going to use in whole application
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule         //In which feature of application we want these pre-built modules we can simply impport this module it in  that fearture's module
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...components               //export them so we can use these components where we import this module
  ]
})
export class SharedModule { }
