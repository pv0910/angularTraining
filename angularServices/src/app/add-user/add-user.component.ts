import { Component, OnInit } from '@angular/core';
import { UserServices } from '../Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  username:string='';
  status:string='active';

  constructor(private userService:UserServices){}

  ngOnInit():void{
    
  }
  AddUser(){
    this.userService.addNewUser(this.username,this.status);
    //console.log(this.userService.users);
  }
}
