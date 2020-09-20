import { Component, OnInit, OnDestroy, NgZone } from "@angular/core"
import { AuthService } from "../../services/auth.service"
import { ActivatedRoute, Router } from "@angular/router"
import { FormControl, AbstractControl, FormGroup, Validators, FormGroupDirective, NgForm, FormBuilder } from "@angular/forms"
import { HttpClient } from "@angular/common/http"
import * as firebase from "firebase"

// import * as firebaseui from "firebaseui"

// import { AngularFireAuth } from "@angular/fire/auth"
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  errorMessage: string
  isLoading = false
  private pass: string

  isLoggedIn: boolean = false

  constructor(private httpService: AuthService, private router: Router, private ActivatedRoute: ActivatedRoute, private http: HttpClient, private formBuilder: FormBuilder) {}
  onSubmit() {
    this.isLoggedIn = true
  }
  logout() {
    this.isLoggedIn = false
  }

  ngOnInit() {
    this.initSigninForm()
  }

  initSigninForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  login() {
    const email = this.loginForm.get("email").value
    const password = this.loginForm.get("password").value
    this.httpService
      .signInUser(email, password)
      .then(data => {
        this.router.navigate(["/"])
      })
      .catch(error => {
        this.errorMessage = error
      })
  }
  GoogleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // The email of the user's account used.
        var email = error.email
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential
        // ...
      })
  }

  FacebookeSignIn() {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // The signed-in user info.
        var user = result.user
        // ...
      })
      .catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message

        var email = error.email

        var credential = error.credential
      })
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched
  }
}
