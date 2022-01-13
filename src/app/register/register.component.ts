import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Register!:FormGroup;
  constructor(private fb:FormBuilder,private API:UserService,private route:Router) { }
  //emailpattern = "^[A-Za-z0-9._%+-]"+"@[a-z0-9.-]"+".[a-z]{2,4}$";
  
        emailpattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
        numberpattern="^([6-9]{1}[0-9]{9})$";
    
  ngOnInit(): void {    
    this.Register=this.fb.group({
      'firstName': new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      'lastName': new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      'email': new FormControl('',[Validators.required,Validators.pattern(this.emailpattern)]),//Validators.pattern(this.emailpattern)]
      'password': new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
      'contactNumber': new FormControl('',[Validators.required,Validators.pattern(this.numberpattern)]),
    })
  }
  onSubmit(){
    console.log(this.Register.value);
    //localStorage.setItem('email', this.Register.value.email);
    //localStorage.getItem('email');
    this.API.Register(this.Register.value).subscribe(res=>{
      
      
swal.fire(
  'Congratulations ! ',
  res)
      this.route.navigateByUrl("");
      this.Register.reset();
    });
    
  }

}
