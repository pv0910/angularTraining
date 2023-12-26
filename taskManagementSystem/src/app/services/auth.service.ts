import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  apiurl='http://localhost:3000/user';

  RegisterUser(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }
  
  GetUserbyCode(id: any) {
    return this.http.get(this.apiurl + '/' + id);
  }
  getUserId(): string {
    return sessionStorage.getItem('username') || '';
    }
   
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
}