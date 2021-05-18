import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss']
})
export class EmployeeHomeComponent implements OnInit {
  currentDate: any;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.currentDate = this.commonService.showTodayDate();
  }

}
