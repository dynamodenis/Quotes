import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikeVoteComponent } from './dislike-vote.component';

describe('DislikeVoteComponent', () => {
  let component: DislikeVoteComponent;
  let fixture: ComponentFixture<DislikeVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislikeVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikeVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
