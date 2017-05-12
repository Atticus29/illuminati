import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MembersDisplayComponent } from './members-display/members-display.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { AboutComponent } from './about/about.component';
import { FilterPipe } from './filter.pipe';
import { AddMemberComponent } from './add-member/add-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersDisplayComponent,
    MemberDetailsComponent,
    AboutComponent,
    FilterPipe,
    AddMemberComponent,
    EditMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
