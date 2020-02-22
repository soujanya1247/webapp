import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { FormsModule} from '@angular/forms';
import { UserService } from '../services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersAppComponent } from './usersapp.component';

@NgModule({
  declarations: [
    UsersAppComponent,
    UsersComponent,
    UserDetailComponent
],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers:[UserService]
})
export class UsersModule { }
