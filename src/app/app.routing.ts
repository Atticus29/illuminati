import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersDisplayComponent } from './members-display/members-display.component';
import { AboutComponent } from './about/about.component'


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
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
