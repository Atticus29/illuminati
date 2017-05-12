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
  member;
  adminStatus = true; // TODO pass this
  memberId: string;
  constructor(private route: ActivatedRoute, public memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.memberId = urlParameters['id'];
   });
   this.member = this.memberService.getMemberById(this.memberId);
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

}
