import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  @Input() header: string;
  ngOnInit(): void {
    this.loginService.userLoginStatus();
  }

  login() { this.loginService.login(); }

  logout() { this.loginService.logout(); }

}
