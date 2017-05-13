import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersDisplayComponent } from './members-display/members-display.component';
import { AboutComponent } from './about/about.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { AddMemberComponent } from './add-member/add-member.component'


const appRoutes: Routes = [
  {
    path: 'members',
    component: MembersDisplayComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'member/:memberId',
    component: MemberDetailsComponent
  },
  {
    path: 'new-member',
    component: AddMemberComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
