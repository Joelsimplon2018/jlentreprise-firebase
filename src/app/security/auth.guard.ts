import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router"
import { Router } from "@angular/router"
import { Observable } from "rxjs"
import { Injectable } from "@angular/core"
import { AuthService } from "../services/auth.service"
import * as firebase from "firebase"

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(true)
        } else {
          this.router.navigate(["/register"])
          resolve(false)
        }
      })
    })
  }
}
