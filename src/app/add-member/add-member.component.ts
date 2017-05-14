import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  sectorOfInfluenceOptions: any[] = [
    {val:'Technology',name:"Technology"},
    {val:'Politics',name:"Politics"},
    {val:'Media',name:"Media"},
    {val:'Commerce',name:"Commerce"},
    {val:'Culture',name:"Culture"},
  ];
  memberForm: FormGroup;

  constructor(private memberService: MemberService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Lifted from M. Warnock with permission
    this.memberForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      illuminatiNickname: ['', Validators.required],
      sectorOfInfluence: ['', Validators.required],
      numberOfTwitterFollowers: ['', Validators.required],
      netWorth: ['', Validators.required],
      politicalImpactQuotient: ['', Validators.required],
      suspicionOfIlluminatiMembership: ['', Validators.required],
      role: ['', Validators.required],
      salientDetails: ['', Validators.required],
      imgURL: ['', Validators.required],
      imgAlt: ['', Validators.required]
    })
  }

  submitForm(){
    let {firstName, lastName, illuminatiNickname, sectorOfInfluence, numberOfTwitterFollowers, netWorth, politicalImpactQuotient, suspicionOfIlluminatiMembership, role, salientDetails, imgURL, imgAlt} = this.memberForm.value;
    let newMember = new Member(firstName, lastName, illuminatiNickname, sectorOfInfluence, numberOfTwitterFollowers, netWorth, politicalImpactQuotient, suspicionOfIlluminatiMembership, role, salientDetails, imgURL, imgAlt);
    this.memberService.addMember(newMember);
    this.memberForm.reset();
  }

}
