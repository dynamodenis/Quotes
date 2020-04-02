import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeVoteComponent } from './like-vote.component';

describe('LikeVoteComponent', () => {
  let component: LikeVoteComponent;
  let fixture: ComponentFixture<LikeVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
