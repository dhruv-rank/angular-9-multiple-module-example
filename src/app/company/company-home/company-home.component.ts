import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.scss']
})
export class CompanyHomeComponent implements OnInit {

  todaydate;
  componentproperty;
  constructor(private commonService: CommonService) { }
  ngOnInit() {
     this.todaydate = this.commonService.showTodayDate();
  }
  onClickSubmit(data) {
     alert("Entered Email id : " + data.emailid);
  }
}
