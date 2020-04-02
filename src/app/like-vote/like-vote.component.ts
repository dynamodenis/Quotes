import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-vote',
  templateUrl: './like-vote.component.html',
  styleUrls: ['./like-vote.component.css']
})
export class LikeVoteComponent implements OnInit {
  likeNo:number=0;
  upVote(){
    this.likeNo++;
  }
  constructor() { }

  ngOnInit() {
  }

}
