import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PosttweetComponent } from './posttweet/posttweet.component';
import { ViewallusersComponent } from './viewallusers/viewallusers.component';
import { ViewalltweetsComponent } from './viewalltweets/viewalltweets.component';
import { ViewmytweetsComponent } from './viewmytweets/viewmytweets.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdittweetComponent } from './edittweet/edittweet.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FilterPipe } from './Pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    PosttweetComponent,
    ViewallusersComponent,
    ViewalltweetsComponent,
    ViewmytweetsComponent,
    SearchComponent,
    EdittweetComponent,
    UserprofileComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
