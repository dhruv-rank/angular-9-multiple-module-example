import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { canActivateGuard } from './can-activate.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [LoginService,canActivateGuard]  
})
export class LoginModule { }  //LoginService and canActivateGuard needs only one instance for application so LoginModule will be imported by CoreModule
