import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map }  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
api:any="https://tweetapiusecase.azurewebsites.net/api/User/";
  constructor(private Http:HttpClient) { }
  Register(data:any){
    return this.Http.post<any>(this.api+"tweets/users/Register",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  UpdateUser(data:any,id:any){
    return this.Http.put<any>(this.api+"tweets/users/update/<id>?Email="+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getAllUser(){
    return this.Http.get<any>('https://tweetapiusecase.azurewebsites.net/api/User/tweets/users/all')
    .pipe(map((res:any)=>{
      return res;
    
    }))
  }
  getUser(data:any){
    return this.Http.get<any>('https://tweetapiusecase.azurewebsites.net/api/User/tweets/users/'+data)
    .pipe(map((res:any)=>{
      return res;
    
    }))
  }
  Login(data:any,pass:any){
    return this.Http.get<any>(this.api+"tweets/users/"+data+","+pass)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  delete(data:any){
    return this.Http.delete<any>(this.api+"tweets/users/delete/<id>?Email="+data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  
}
