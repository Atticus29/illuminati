import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { FilterPipe } from '../filter.pipe'

@Component({
  selector: 'app-members-display',
  templateUrl: './members-display.component.html',
  styleUrls: ['./members-display.component.css']
})
export class MembersDisplayComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  byString: string = '';
  identityString: string = '';

  constructor(public router: Router, public memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(member){
    this.router.navigate(['member', member.$key])
  }

  changeFilterStrings(usrByString: string, usrIdentityString: string){
    this.byString = usrByString;
    this.identityString = usrIdentityString;
    // console.log(usrByString);
    // console.log(usrIdentityString);
  }

  getUniqueRoles(members: Member[]){
    var flags = [], output = [], l = members.length, i;
    for( i=0; i<l; i++) {
      if( flags[members[i].role]) continue;
      flags[members[i].role] = true;
      output.push(members[i].role);
    }
    return output;
  }

  getUniqueSectorsOfInfluence(members: Member[]){
    var flags = [], output = [], l = members.length, i;
    for( i=0; i<l; i++) {
      if( flags[members[i].sectorOfInfluence]) continue;
      flags[members[i].sectorOfInfluence] = true;
      output.push(members[i].sectorOfInfluence);
    }
    return output;
  }
}
