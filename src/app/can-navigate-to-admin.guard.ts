import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, ActivatedRoute, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "./shared/authentication.service";

class ActivateRoute {
}

@Injectable({
  providedIn: 'root'
})
export class CanNavigateToAdminGuard implements CanActivate {

  constructor(
    private authServices: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean { if (this.authServices.isLoggedIn()) {
    return true;
  } else {
    window.alert(
      "Sie müssen Sich einloggen, um den Administrationsbereich zu betreten"
    );
    console.log(state);
    this.router.navigate(["../"], { relativeTo: this.route }); return false;
  } }

}
