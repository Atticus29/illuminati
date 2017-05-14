import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { MembersDisplayComponent } from './members-display/members-display.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { AboutComponent } from './about/about.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';

import { masterFirebaseConfig } from './api-keys';

import { routing } from './app.routing';

import {MemberService} from './member.service';

import { FilterPipe } from './filter.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MembersDisplayComponent,
    MemberDetailsComponent,
    AboutComponent,
    FilterPipe,
    AddMemberComponent,
    EditMemberComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
