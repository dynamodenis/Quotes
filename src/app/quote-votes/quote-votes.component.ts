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

  likeVotes(){
    this.likes++;
  }
  downVotes(){
    this.dislikes++;
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
