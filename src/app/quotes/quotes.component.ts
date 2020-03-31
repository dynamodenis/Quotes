import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  myStyles={
    'background-color':'black',
    'color':'white',
    'text-align':'center',
    'height': '15vh',
    'font-size': '50px',
    'padding-top': '20px'
  }
  footer={
    'background-color':'black',
    'color':'white',
    'text-align':'center'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
