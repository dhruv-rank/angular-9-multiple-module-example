import { Injectable } from '@angular/core';
import { Employee } from './employee.model.';

@Injectable()
export class EmployeeService {

    private employeeList: Employee[] = [
        { id: 0, name: 'Venmerth', position: 'sr' },
        { id: 1, name: 'Isabel', position: 'jr' }
    ]

    constructor() { }

    getEmployeeList() {
        return this.employeeList;
    }

    addEmployee(employee: Employee) {
        employee.id = this.employeeList.length;
        this.employeeList.push(employee);
    }

    removeEmployee(id: number) {
        const index = this.employeeList.findIndex(element => element.id == id);
        if (index != -1) { this.employeeList.splice(index, 1); }
    }

    getEmployeeById(id: number): Employee {
        return this.employeeList.filter(element => element.id == id)[0];
    }


}