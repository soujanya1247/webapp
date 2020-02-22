import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';

import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UsersAppComponent } from './usersapp.component';

const routes: Routes = [
    { path: '', component: UsersAppComponent, children: [
        {
            path: '', component: UsersComponent
        },
        {
            path: 'user', component: UserDetailComponent
        }]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }