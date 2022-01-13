import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tweet } from '../models/tweet';
import { TweetService } from '../services/tweet.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edittweet',
  templateUrl: './edittweet.component.html',
  styleUrls: ['./edittweet.component.css']
})
export class EdittweetComponent implements OnInit {
  EditTweet!:FormGroup;
  tweet:Tweet={
    id:'',
        tweetId: 0,
        userName: '',
        message: '',
        like: 0,
        reply: []    
  }
  id:any;
  constructor(private fb:FormBuilder,private API:TweetService,private route:Router,private ar:ActivatedRoute) { }
 
  ngOnInit(): void {
    
    this.id=this.ar.snapshot.paramMap.get('id');
    this.API.getTweetId(this.id).subscribe(res=>{
      this.tweet=res;
      this.EditTweet=this.fb.group({
        'tweetID': new FormControl(this.id,[Validators.required,Validators.minLength(1)]),
        'userName': new FormControl(this.tweet.userName,[Validators.required,Validators.minLength(1)]),
        'message': new FormControl(this.tweet.message,[Validators.required,Validators.minLength(1)])
      })

    })
    this.EditTweet=this.fb.group({
      'tweetID': new FormControl(this.id,[Validators.required,Validators.minLength(1)]),
      'userName': new FormControl(this.tweet.userName,[Validators.required,Validators.minLength(1)]),
      'message': new FormControl(this.tweet.message,[Validators.required,Validators.minLength(1)])
    })
    console.log(this.id);
    
    
  }
  Post(){
    console.log(this.EditTweet.value)
    this.API.UpdateTweet(this.EditTweet.value,this.id).subscribe(res=>{
      //alert(res);
swal.fire(
  'Congrats !',
  res)
      this.route.navigateByUrl("/viewmytweets");
      this.EditTweet.reset();
    });
    
  }

}
