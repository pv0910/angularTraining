import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserServices{
    constructor(private Logger:LoggerService){}
    users=[
        {name:'John',status:'active'},
        {name:'Mark',status:'inactive'},
        {name:'Steve',status:'inactive'},
        {name:'Jack',status:'active'},
    ]

    addNewUser(name:string,status:string){
        this.users.push({name:name,status:status});
        this.Logger.LogMessage(name,status);
    }
}