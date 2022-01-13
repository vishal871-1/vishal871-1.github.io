import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Login!:FormGroup;
  email:any;
  pass:any;
  constructor(private fb:FormBuilder,private API:UserService,private route:Router) { }

  ngOnInit(): void {
    this.Login=this.fb.group({
      'email': new FormControl('',[Validators.required]),//Validators.pattern(this.emailpattern)]
      'password': new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }
  Log(){
    this.email=this.Login.value.email;
    this.pass=this.Login.value.password;
    localStorage.setItem('email', this.email);
    this.API.Login(this.email,this.pass).subscribe(res=>{
      
      if(res){
      
swal.fire(
  'Successfully Logged in ! ',
  res)
 
      this.route.navigateByUrl("/viewalltweets");
      //.then(()=>{setTimeout(()=>{window.location.reload()},3000);});
     
      this.Login.reset();
     // window.location.reload();
      }
      else{
       
        swal.fire(
          'Oops ! ',
          res)
      }
    });
    
  }

}
