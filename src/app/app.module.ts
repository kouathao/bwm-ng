import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { RentalComponent } from "./rental/rental.component";

// import module
import { RentalModule } from "./rental/rental.module";

// each routh is an object
//1) Path i.e / or /rental then components

/*
 A redirect route requires a pathMatch property to tell the router how to match a URL to the path of a route. The router throws an error if you don't
*/
const routes: Routes = [
  { path: "", redirectTo: "/rentals", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule, RentalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
