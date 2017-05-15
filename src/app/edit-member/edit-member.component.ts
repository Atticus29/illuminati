import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemberService } from '../member.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  @Output() clickSender = new EventEmitter();
  memberId;
  // @Input() childMemberToDisplay;
  childMemberToDisplay;
  constructor(public memberService: MemberService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = parseInt(urlParameters['memberId']);
    });
    this.memberService.getMemberById(this.memberId).subscribe(results=>{
      this.childMemberToDisplay = results;
      console.log(this.childMemberToDisplay);
    });
  }

finishEditing(member){
  this.memberService.updateMember(member);
  this.clickSender.emit(member);
}

}
