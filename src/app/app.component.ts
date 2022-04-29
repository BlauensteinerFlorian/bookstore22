import { Component } from '@angular/core';
import {AuthenticationService} from "./shared/authentication.service";

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  /*template: '<bs-book-list></bs-book-list>',*/
  styles: []
})
export class AppComponent {
  constructor(private authService: AuthenticationService) {

  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
  getLoginLabel(){
    if(this.isLoggedIn())
      return "Logout";
    return "Login";
  }

}
