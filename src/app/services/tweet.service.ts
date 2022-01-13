import { HttpClient } from '@angular/common/http';
import { map }  from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  api:any="https://tweetapiusecase.azurewebsites.net/api/Tweet/";
  //api:any="https://localhost:49161/api/Tweet/"
  constructor(private Http:HttpClient) { }
  PostTweet(data:any){
    return this.Http.post<any>(this.api+"tweets/add",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  UpdateTweet(data:any,id:any){
    return this.Http.put<any>(this.api+"tweets/update/<id>?TweetId="+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  ReplyTweet(data:any,id:any){
    return this.Http.put<any>(this.api+"tweets/Reply/"+data+"?Tweet="+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  LikeTweet(data:any,id:any){
    return this.Http.put<any>(this.api+"tweets/Like/"+data+"?Tweet="+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getAllTweet(){
    return this.Http.get<any>(this.api+'tweets/all')
    .pipe(map((res:any)=>{
      return res;    
    }))
  }
  getMyTweets(data:any){
    return this.Http.get<any>(this.api+'tweets/GetMyTweet/'+data)
    .pipe(map((res:any)=>{
      return res;
    
    }))
  }
  getTweetId(data:any){
    return this.Http.get<any>(this.api+'tweets/Get/'+data)
    .pipe(map((res:any)=>{
      return res;
    
    }))
  }
  delete(data:any){
    return this.Http.delete<any>(this.api+"tweets/delete/<id>?TweetId="+data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
