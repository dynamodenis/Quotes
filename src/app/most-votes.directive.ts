import { Directive , ElementRef, Input} from '@angular/core';
import { Quotes } from './quotes';

@Directive({
  selector: '[appMostVotes]'
})
export class MostVotesDirective {
  @Input() upvotes:Quotes;
  @Input() downvotes:Quotes;
  constructor(elem:ElementRef) { }

}
