import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent implements OnInit {
user:User[]=[];
a:any;
search:any="";
  constructor(private API:UserService) { } 

  ngOnInit(): void {
    this.API.getAllUser().subscribe(res=>{
      console.log(res);
      this.user=res;
      this.a=this.user[0].firstName;
      console.log(this.a);
    })
  }

}
