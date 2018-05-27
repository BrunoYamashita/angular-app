import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'


import { Observable } from "rxjs";

import { User } from '../models/user';
import { UsersService } from "../services/users.service";

@Component({
  selector: 'st-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  users: User[];
  searchForm: FormGroup
  searchControl: FormControl
  searchUser : boolean = false 
  message : String 

  constructor(private userService: UsersService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
  }

  find(){
    this.userService.getUsers().subscribe(users => this.users = users)
  }

  findByName(title: String){
    this.userService.getUsersByName(title).subscribe(users => {
      this.users = users
      this.message = '';    
    }, 
    error =>{
      this.message = error;
      this.users=[]; 
    })
  }

  toggleSearch(){
    this.searchUser = !this.searchUser
    this.searchControl.setValue('')
  }
  onSubmit(type:String) {
    this.message= '';
    const formModel = this.searchForm.value;
      this.findByName(formModel.searchControl)
  }

}
