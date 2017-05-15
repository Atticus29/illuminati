import { Injectable } from '@angular/core';
import {Member} from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers(){
    return this.members;
  }

  getMemberById(memberId: string){
    return this.database.object('members/' + memberId);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  delete(member){
      var memberEntryInFirebase = this.getMemberById(member.$key);
      memberEntryInFirebase.remove();
  }

  updateMember(localUpdatedMember){
  var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
  memberEntryInFirebase.update({firstName: localUpdatedMember.firstName,
                              lastName: localUpdatedMember.lastName,
                              illuminatiNickname: localUpdatedMember.illuminatiNickname,
                              sectorOfInfluence: localUpdatedMember.sectorOfInfluence,
                              numberOfTwitterFollowers: localUpdatedMember.numberOfTwitterFollowers,
                              netWorth: localUpdatedMember.netWorth,
                              politicalImpactQuotient: localUpdatedMember.politicalImpactQuotient,
                              suspicionOfIlluminatiMembership: localUpdatedMember.suspicionOfIlluminatiMembership,
                              role: localUpdatedMember.role,
                              salientDetails: localUpdatedMember.salientDetails,
                              imgURL: localUpdatedMember.imgURL,
                              imgAlt: localUpdatedMember.imgAlt});
}

}
