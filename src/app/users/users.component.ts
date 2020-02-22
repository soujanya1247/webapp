import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    private users:User[];
    private noOfUsers:number=5;
    private userKey:string="LS_UserSelected";
    private IsError:boolean=false;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    localStorage.removeItem(this.userKey);
    this.loadUsers();
  }

  loadUsers(){
    if(this.noOfUsers>0 && this.noOfUsers<=20){
      this.userService.getUsers(this.noOfUsers).subscribe(result=>{
        this.users=result.results
      })
      this.IsError=false;
    }
    else{
      this.IsError=true;
      this.users=[];
    }

  }
  gotoUser(user:User){
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.router.navigate([`/users/user`])
  }

}
