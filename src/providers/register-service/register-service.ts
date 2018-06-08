import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RegisterServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterServiceProvider {

  apiUrl = 'http://localhost:8000';
  constructor(public http: HttpClient) {
    console.log('Hello RegisterServiceProvider Provider');
  }

  getUsers(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/user').subscribe(data => {
        resolve(data);
      }), err => {
        console.log(err);
      }
    })
  }

  saveUser(user: any){
    return new Promise(resolve=>{
      this.http.post(this.apiUrl+"/user/register", user).subscribe(data =>{
        console.log(data);
      }), error => {
        console.log(error);
      }
    })
  }

  updateUser(user_profile: any){
    return new Promise(resolve=>{
      this.http.put(this.apiUrl+"/user/"+user_profile._id, user_profile).subscribe(data =>{
        console.log(data);
      }), error => {
        console.log(error);
      }
    })
  }

  tryLogin(login_details: any){
    return new Promise(resolve=>{
      this.http.post(this.apiUrl+"/user/login", login_details).subscribe(data =>{
        localStorage.setItem('currentUser', JSON.stringify(data));
        resolve(data);

      }), error => {
        console.log(error);
      }
    })
  }

  

}
