import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members-display',
  templateUrl: './members-display.component.html',
  styleUrls: ['./members-display.component.css']
})
export class MembersDisplayComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(public router: Router, public memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(member: Member){
    this.router.navigate(['member', member.$key])
  }

}
