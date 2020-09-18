import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { DomSanitizer } from "@angular/platform-browser"
import { HttpClient } from "@angular/common/http"

import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup } from "@angular/forms"

@Component({
  selector: "app-prestataire-register",
  templateUrl: "./prestataire-register.component.html",
  styleUrls: ["./prestataire-register.component.css"]
})
export class PrestataireRegisterComponent implements OnInit {
  fileData: File = null
  name = new FormControl("")
  myForm: FormGroup
  successMessage: String = ""
  emailFormControl = new FormControl("", [Validators.required, Validators.email])

  constructor(private http: HttpClient, private router: Router, private ActivatedRoute: ActivatedRoute, private domSanitizer: DomSanitizer) {
    this.myForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      competences: new FormControl(null, Validators.required),
      experience: new FormControl(null, Validators.required),
      marielles: new FormControl(null, Validators.required),
      tarif: new FormControl(null, Validators.required),

      telephone: new FormControl(1824255, Validators.required)
    })
  }

  RegisterNewPresta() {}

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched
  }

  ngOnInit() {}
}
