import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  selectOptions;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.selectOptions = [
      {val:1,name:"Option 1"},
      {val:2,name:"Option 2"},
      {val:3,name:"Option 3"}
    ]
  }

  submitForm(firstName: string, lastName: string, illuminatiNickname: string, sectorOfInfluence: string, numberOfTwitterFollowers: number, netWorth: number, politicalImpactQuotient: number, suspicionOfIlluminatiMembership: number, role: string, salientDetails: string, imgURL: string, imgAlt: string){
    let newMember: Member = new Member(firstName, lastName, illuminatiNickname, sectorOfInfluence, numberOfTwitterFollowers, netWorth, politicalImpactQuotient, suspicionOfIlluminatiMembership, role, salientDetails, imgURL, imgAlt);
    this.memberService.addMember(newMember);
  }

}
