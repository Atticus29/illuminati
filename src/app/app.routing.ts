import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MembersDisplayComponent} from './members-display/members-display.component';


const appRoutes: Routes = [
  {
  path: 'members',
  component: MembersDisplayComponent
}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
