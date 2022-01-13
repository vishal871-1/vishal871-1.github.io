import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TweetService } from '../services/tweet.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-posttweet',
  templateUrl: './posttweet.component.html',
  styleUrls: ['./posttweet.component.css']
})
export class PosttweetComponent implements OnInit {
  PostTweet!:FormGroup;
  constructor(private fb:FormBuilder,private API:TweetService,private route:Router) { }
  

  ngOnInit(): void {
    var User=localStorage.getItem('email');
    this.PostTweet=this.fb.group({
      'tweetID': new FormControl('',[Validators.required,Validators.minLength(1)]),
      'userName': new FormControl(User,[Validators.required,Validators.minLength(1)]),
      'message': new FormControl('',[Validators.required,Validators.minLength(1)])
    })
  }
  Post(){
    console.log(this.PostTweet.value)
    this.API.PostTweet(this.PostTweet.value).subscribe(res=>{
      //alert(res);
      //import swal from 'sweetalert2';
swal.fire(
  'Good job!',
  res)
      this.route.navigateByUrl("/viewalltweets");
      this.PostTweet.reset();
    });
    
  }


}
