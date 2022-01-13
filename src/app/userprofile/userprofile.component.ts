import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
i:User={
   id : "",
  firstName : "",
   lastName : "",
   email : "",
   password : "",
   contactNumber : 0
};
visible:boolean=true;
  constructor(private API:UserService,private route:Router) { }

  ngOnInit(): void {
    var User=localStorage.getItem('email');
    this.API.getUser(User).subscribe(res=>{
      console.log(res);
      this.i=res;
    })}

    logout()
    {

      this.i.email="";
      this.i.firstName="";
      this.i.lastName="";
      this.i.contactNumber=0;
      Swal.fire("You have successfully logged out ");
      this.route.navigateByUrl("").then(()=>{setTimeout(()=>{window.location.reload()},3000);});
      window.localStorage.clear();
     
    }
  }


