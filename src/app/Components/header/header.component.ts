import { Component, OnInit } from "@angular/core"
import * as firebase from "firebase"
import { AuthService } from "../../services/auth.service"
import { ActivatedRoute, Router } from "@angular/router"
import { FormControl, AbstractControl, FormGroup, Validators, FormGroupDirective, NgForm } from "@angular/forms"
import { HttpClient } from "@angular/common/http"

import { Observable } from "rxjs"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  user: firebase.User
  isAuth: boolean
  isLoggedIn$: Observable<Boolean>
  isLoggedOut$: Observable<Boolean>

  constructor(private AuthService: AuthService, private router: Router, private ActivatedRoute: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuth = true
      } else {
        this.isAuth = false
      }
    })
  }
  onSignOut() {
    this.AuthService.signOutUser()
  }
}
