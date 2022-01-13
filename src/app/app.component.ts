import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean=false;
  title = 'Tweet App';
  
  ngOnInit(): void {
    var User=localStorage.getItem('email');
    console.log(User);
    if(User!==null)
    {
      this.show=true;
    }
  }

}
