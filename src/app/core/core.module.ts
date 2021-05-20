import { NgModule } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomLoadModuleStrategyService } from '../custom-load-module-strategy.service';
import { LoginModule } from '../login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [],
  imports: [
    HttpClientModule, // these are the modules which we are going to use all over the application and it needs to import only once for whole application
    LoginModule,      // so it is better to use in the core module(we can also import them into shared module)
    NgbModule,
  ],
  providers: [CommonService, CustomLoadModuleStrategyService]      //it will create same instance for whole application
})
export class CoreModule { } // core module must be imported once and only in app module
