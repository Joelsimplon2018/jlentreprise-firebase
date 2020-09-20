import { Component, OnInit } from "@angular/core"
import { AuthService } from "../../services/auth.service"
import { ActivatedRoute, Router } from "@angular/router"
import { FormControl, AbstractControl, FormGroup, Validators, FormGroupDirective, NgForm, FormBuilder } from "@angular/forms"
import * as firebase from "firebase"
import { HttpClient } from "@angular/common/http"

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup
  successMessage: String
  errorMessage: string
  error = []
  constructor(private httpService: AuthService, private router: Router, private ActivatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.initSigninForm()
  }
  initSigninForm() {
    this.myForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    })
  }
  register() {
    const email = this.myForm.get("email").value
    const password = this.myForm.get("password").value
    this.httpService
      .signUpUser(email, password)
      .then(data => {
        this.router.navigate(["/"])
      })
      .catch(error => {
        this.errorMessage = error
      })
  }
}
