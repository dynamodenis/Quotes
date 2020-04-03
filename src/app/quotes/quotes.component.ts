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
    new Quotes(1,new Date(2020,2,4),"Denis Mbugua", "Maya Angelou","If your always trying to be normal you will never know how amazing you can be.",12,2),
    new Quotes(1,new Date(2020,2,4),"Denis Mbugua", "Albert Einstein","The true proof of intelligence is not the level of knowledge but imagination.",6,0),

  ];
  // This Increaments the upvote on a quote
upVotes(index){
  this.quotes[index].upVotes++;

}
  // This Increaments the downvote on a quote
downVotes(index){
  this.quotes[index].downVotes++;
}
 
// CLASS BINDING
liked(index){
  let myStyles={
    'background-color':this.quotes[index] ? 'blue' : 'default',
  }
  return myStyles;
}

// CLASS BINDING
disliked(index){
  let myStyles={
    'background-color':this.quotes[index] ? 'red' : 'default',
  }
  return myStyles;
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

// Class binding
  public span="space"
  public margin="span"

  // This objects are used to style the DOM
  bodyHead={
    'background-color':'black',
    'text-align':'center',
    'font-size':'2em',
    'color':'white'

  }
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
