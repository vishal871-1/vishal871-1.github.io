import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet';
import { TweetService } from '../services/tweet.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-viewmytweets',
  templateUrl: './viewmytweets.component.html',
  styleUrls: ['./viewmytweets.component.css']
})
export class ViewmytweetsComponent implements OnInit {
  Mytweets:Tweet[]=[];
  val:any;
  ReplyTweet!:FormGroup;
  heart:boolean=true;
  constructor(private API:TweetService,private fb:FormBuilder) { }

  ngOnInit(): void {
    var User=localStorage.getItem('email');
    this.ReplyTweet=this.fb.group({
      'reply': new FormControl('',[Validators.required,Validators.minLength(1)])
    })
    this.API.getMyTweets(User).subscribe(res=>{
      console.log(res);
      this.Mytweets=res;
    })
  }
  deletePost(id:any){
    
    this.API.delete(id).subscribe(res=>{
      
swal.fire(
  'Oops !',
  res)
     // alert(res);
      this.ngOnInit();
    })
  }
  Like(id:any){
    var data;
    if(this.heart)
    {
      data=1;
      this.heart=false;
    }
    else{
      data=-1
      this.heart=true
    }
    console.log(data);
    
    this.API.LikeTweet(data,id).subscribe(res=>{
     // alert(res);
    // import swal from 'sweetalert2';
swal.fire(
  'Good job!',
  res)
      console.log(res);
      this.ngOnInit();
    })
  }
Reply(id:any){
  console.log(this.ReplyTweet.value.reply);
  this.API.ReplyTweet(this.ReplyTweet.value.reply,id).subscribe(res=>{
   // alert(res);
   //import swal from 'sweetalert2';
swal.fire(
  'Yes ! ',
  res)
    console.log(res);
    this.ngOnInit();
    this.ReplyTweet.reset()
  })
}
}
