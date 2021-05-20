import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  @Input() employeeService: EmployeeService;
  @ViewChild('addEmployee') addEmployee: NgForm;

  name: string;
  position: string ='Senior';
  positionList = ['Senior', 'Junior', 'Manager'];
  constructor(public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.employeeService.addEmployee({ 'id': null, 'name': this.name, "position": this.position });
  }
}
