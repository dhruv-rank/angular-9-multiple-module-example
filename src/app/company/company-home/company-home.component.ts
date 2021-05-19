import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.scss']
})
export class CompanyHomeComponent implements OnInit {

  todaydate;
  componentproperty;

  @ViewChild('userlogin') userlogin: NgForm;

  compantList: Company[];

  constructor(private commonService: CommonService, private companyService: CompanyService) { }
  ngOnInit() {
    this.todaydate = this.commonService.showTodayDate();
    this.compantList = this.companyService.getCompanyList();
  }
  onClickSubmit(data) {
    if (this.userlogin.valid) {
      this.companyService.addCompany(data);
    }

  }
}
