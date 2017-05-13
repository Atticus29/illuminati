import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  memberToDisplay;
  adminStatus = true; // TODO pass this
  memberId: string;
  constructor(private route: ActivatedRoute, public memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      // console.log(urlParameters);
     this.memberId = urlParameters['memberId'];
   });
  //  console.log("memberId is: " + this.memberId);
   this.memberToDisplay = this.memberService.getMemberById(this.memberId);
   console.log(this.memberToDisplay);
  }

  calculateInfluenceQuotient(){
    let twitterPopulation: number = 328000000;
    let totalWorldWeath: number = 60000000000;
    let influenceQuotient: number;
    this.memberService.getMemberById(this.memberId).subscribe(results=>{
      influenceQuotient = results.numberOfTwitterFollowers/twitterPopulation + results.netWorth/totalWorldWeath + results.politicalImpactQuotient - results.suspicionOfIlluminatiMembership;
    });
    console.log(influenceQuotient);
    return influenceQuotient;
  }

  deleteMember(currentMember: Member){
    if(confirm("Are you sure you want to excommunicate this member?")){
      this.memberService.delete(currentMember);
    }
  }

}
