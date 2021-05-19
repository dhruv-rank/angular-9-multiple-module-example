import { Injectable } from '@angular/core';
import { Company } from './company.model';


@Injectable()
export class CompanyService {


    private companyList: Company[] = [
        { id: 0, title: 'Unity', description: 'The best ever game development tool built' },
        { id: 1, title: 'EA Sport', description: 'Master of tom clancy' }
    ]

    constructor() { }

    getCompanyList() {
        return this.companyList;
    }

    addCompany(company: Company) {
        company.id = this.companyList.length;
        this.companyList.push(company);
    }

    removeCompany(id: number) {
        const index = this.companyList.findIndex(element => element.id == id);
        if (index != -1) { this.companyList.splice(index, 1); }
    }

    getCompanyById(id: number): Company {
        return this.companyList.filter(element => element.id == id)[0];
    }

}