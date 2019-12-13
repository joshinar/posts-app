import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { PostsService } from "./posts.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
