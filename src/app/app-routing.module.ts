import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdittweetComponent } from './edittweet/edittweet.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PosttweetComponent } from './posttweet/posttweet.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ViewalltweetsComponent } from './viewalltweets/viewalltweets.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { ViewmytweetsComponent } from './viewmytweets/viewmytweets.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'viewmytweets',component:ViewmytweetsComponent},
  {path:'viewalltweets',component:ViewalltweetsComponent},
  {path:'viewallusers',component:ViewallusersComponent},
  {path:'posttweet',component:PosttweetComponent},
  {path:'searchbyuser',component:SearchComponent},
  {path:'edittweet/:id',component:EdittweetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
