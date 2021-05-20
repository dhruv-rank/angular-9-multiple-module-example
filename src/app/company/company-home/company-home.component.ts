import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCompanyComponent } from '../add-company/add-company.component';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.scss']
})
export class CompanyHomeComponent implements OnInit {

  todaydate;

  @ViewChild('addCompany') addCompany: NgForm;
  searchCompany:string;
  compantList: Company[];

  constructor(private commonService: CommonService, private companyService: CompanyService,private modalService: NgbModal) { }
  ngOnInit() {
    this.todaydate = this.commonService.showTodayDate();
    this.compantList = this.companyService.getCompanyList();
  }
  

  open() {
    const modalRef = this.modalService.open(AddCompanyComponent);
    modalRef.componentInstance.companyService = this.companyService;
  }
}
