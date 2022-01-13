import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet';
import { TweetService } from '../services/tweet.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-viewalltweets',
  templateUrl: './viewalltweets.component.html',
  styleUrls: ['./viewalltweets.component.css']
})
export class ViewalltweetsComponent implements OnInit {
tweets:Tweet[]=[];
ReplyTweet!:FormGroup;
heart:boolean=true;
nu:number=0;

  constructor(private API:TweetService,private fb:FormBuilder) { }
  ngOnInit(): void {
  
    this.API.getAllTweet().subscribe(res=>{
      console.log(res);
      this.tweets=res;
    })
    this.ReplyTweet=this.fb.group({
      'reply': new FormControl('',[Validators.required,Validators.minLength(1)])
    })
  }
  
  Reply(id:any){
    console.log(this.ReplyTweet.value.reply);
    this.API.ReplyTweet(this.ReplyTweet.value.reply,id).subscribe(res=>{
      //alert(res);
      swal.fire(
        'Good job!',
        res)
      console.log(res);
      this.ngOnInit();
      this.ReplyTweet.reset()
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
     swal.fire(
      'Good job!',
      res) 
     console.log(res);
      this.ngOnInit();
    })
  }
}
