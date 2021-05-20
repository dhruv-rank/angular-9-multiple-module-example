import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { Employee } from '../employee.model.';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../employee.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss']
})
export class EmployeeHomeComponent implements OnInit {
  currentDate: any;
  employeeList: Employee[];
  searchEmployee: string;
  constructor(private commonService: CommonService, private modalService: NgbModal, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.currentDate = this.commonService.showTodayDate();
    this.employeeList = this.employeeService.getEmployeeList();
  }

  open() {
    const modalRef = this.modalService.open(AddEmployeeComponent);
    modalRef.componentInstance.employeeService = this.employeeService;
  }
}
