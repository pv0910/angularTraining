import { Component, OnInit } from '@angular/core';
import { UserServices } from './Services/user.service';
import { LoggerService } from './Services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserServices,LoggerService]
})
export class AppComponent implements OnInit{
  title = 'angularServices';

  constructor(private userService:UserServices,private loggerService:LoggerService){}
 
  users:{name:string,status:string}[]=[];

  ngOnInit(){
    this.users=this.userService.users;
  }
}
