import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';
import { Quotes } from '../quotes';

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

 @Input() quote:Quotes;
 newQuote= new Quotes(0,new Date(),'','','');

 @Output() addQuote= new EventEmitter<any>();

 submitForm(){
   this.addQuote.emit(this.newQuote);
   this.newQuote= new Quotes(0,new Date(),'','','');
 }

  constructor() { }

  ngOnInit(){
  }

}
