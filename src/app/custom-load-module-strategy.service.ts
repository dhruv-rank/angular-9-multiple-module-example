import { Injectable } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class CustomLoadModuleStrategyService implements PreloadingStrategy {

  constructor() { }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {     
    if (route['path'] == 'cmp') {
      return fn();      //return obaservable function if want to preload
    } else {
      alert(`not possible for ${route['path']} `)
      return of(null);  //return observable of null if don't want to preload
    }

  }


}
