import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
//  STYLE BINDING FOR THE FORM HEADER
  formHead={
    'font-size':'2em',
    'display':'float-left',
    'border':'1px solid green',
    'border-radius':'10px',
    'background-color':'rgb(73, 55, 30)',
    'color':'white',
    'padding-left':'15px'
 }
  constructor() { }

  ngOnInit(): void {
  }

}
