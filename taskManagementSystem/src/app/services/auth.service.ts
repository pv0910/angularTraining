import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  apiurl='http://localhost:3000/user';

  public RegisterUser(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }
  
  public GetUserbyCode(id: any) {
    return this.http.get(this.apiurl + '/' + id);
  }
  public getUserId(): string {
    return sessionStorage.getItem('username') || '';
    }
   
  public isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
}