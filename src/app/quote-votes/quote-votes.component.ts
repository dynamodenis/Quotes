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

  // Votes(){
  //   if(this.liked=true){
  //      this.likes++;
  //   } else{
  //     this.disliked=true
  //     this.dislikes++;
  //   }
  // }

  likeVotes(){
    // this.likes++;
    // this.isDisabled=true;
    // this.liked=true;
    if(this.liked=true){
      this.likes++;
      this.disliked=false;
      // this.isDisabled=true;
    }else if(this.disliked=true){
      this.liked=false
      this.dislikes-1;
    }

  }
  downVotes(){
    // this.dislikes++;
    // this.isDisabled=true;
    // this.disliked=true;
    if(this.disliked=true){
      this.dislikes++;
      this.liked=false;
    }else if(this.liked=true){
      this.likes-1;
      this.disliked=false;
    }

    
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
