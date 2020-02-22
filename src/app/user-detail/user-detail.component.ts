import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private selectedUser:User;
  private userKey:string="LS_UserSelected";

  constructor() { }

  ngOnInit() {
    this.selectedUser=JSON.parse(localStorage.getItem(this.userKey));
  }

}
