import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  constructor() { }

  @Input() id:number;
  @Input() name:string;
  @Input() description: string;
 
  ngOnInit(): void {
  }

}
