import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee.model.';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

@Input() employee:Employee;
  constructor() { }

  ngOnInit(): void {
  }

}
