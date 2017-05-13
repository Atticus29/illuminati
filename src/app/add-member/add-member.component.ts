import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  selectOptions;
  constructor() { }

  ngOnInit() {
    this.selectOptions = [
      {val:1,name:"Option 1"},
      {val:2,name:"Option 2"},
      {val:3,name:"Option 3"}
    ]
  }

}
