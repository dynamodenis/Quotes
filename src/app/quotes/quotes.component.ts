import { Component, OnInit } from '@angular/core';
import {  Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    // All the quote objects go here
    new Quotes(1,new Date(2020,2,4),"Denis Mbugua", "Albert","Live free",0,0),
  ];
  // This Increaments the upvote on a quote
  public liked=false;
upVotes(index){
  this.quotes[index].upVotes++;
  this.liked=true;
}
  // This Increaments the downvote on a quote
  public disliked=false;
downVotes(index){
  this.quotes[index].downVotes++;
  this.disliked=true;
}


  // this toogles between description
  quoteDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }

  // THIS DELETES THE QUOTE
  quoteDelete(complete,i){
    if(complete){
      let deleteIt=confirm(`Are you sure you want to delete ${this.quotes[i].quote}`);
      if(deleteIt){
        this.quotes.splice(i,1);
      }
    }
  }
  // ADD NEW QUOTE TO THE ARRAY FUNCTION
  addNewQuote(newQuote){
    let quoteLength=this.quotes.length;
    newQuote.id=quoteLength++;
    newQuote.date= new Date(newQuote.date);
    this.quotes.push(newQuote);
    console.log(newQuote);

  // if(newQuote){
  //   newQuote.author='';
  //   newQuote.quote='';
  //   newQuote.name='';
  // }
    
  }



  // This objects are used to style the DOM
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

  ngOnInit() {
  }

}
