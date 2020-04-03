import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-votes',
  templateUrl: './quote-votes.component.html',
  styleUrls: ['./quote-votes.component.css']
})
export class QuoteVotesComponent implements OnInit {
  @Input() quote:Quotes;
  likes:number=0;
  dislikes:number=0;
  isDisabled=false;
  liked=false;

  disliked=false;

  likeVotes(){
    this.likes++;
    this.isDisabled=true;
    this.liked=true;

  }
  downVotes(){
    this.dislikes++;
    this.isDisabled=true;
    this.disliked=true;
    
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
