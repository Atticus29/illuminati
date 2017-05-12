import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import {Member} from '../member.model';

@Component({
  selector: 'app-members-display',
  templateUrl: './members-display.component.html',
  styleUrls: ['./members-display.component.css']
})
export class MembersDisplayComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  constructor() { }

  ngOnInit() {
  }

}
