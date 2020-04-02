import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dislike-vote',
  templateUrl: './dislike-vote.component.html',
  styleUrls: ['./dislike-vote.component.css']
})
export class DislikeVoteComponent implements OnInit {
  
  dislikeNo:number=0;
   downVote(){
    this.dislikeNo++;
   }
  constructor() { }

  ngOnInit(){
  }

}
