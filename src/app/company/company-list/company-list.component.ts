import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor() { }


  @Input() company:Company;

  ngOnInit(): void {
  }

}
