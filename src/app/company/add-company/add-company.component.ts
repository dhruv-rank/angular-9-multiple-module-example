import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { CompanyService } from "../company.service";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

  @Input() companyService: CompanyService;
  @ViewChild('addCompany') addCompany: NgForm;
  constructor(public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    if (this.addCompany.valid) {
      this.companyService.addCompany(data);
    }
  }

}
