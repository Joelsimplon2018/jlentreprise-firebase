import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { DomSanitizer } from "@angular/platform-browser"
import { HttpClient } from "@angular/common/http"
import { PrestatService } from "../../services/prestat.service"
import { Prestataires } from "../../models/prestataire.model"
import { FormControl, Validators, FormGroupDirective, NgForm, FormBuilder, FormGroup } from "@angular/forms"

@Component({
  selector: "app-prestataire-register",
  templateUrl: "./prestataire-register.component.html",
  styleUrls: ["./prestataire-register.component.css"]
})
export class PrestataireRegisterComponent implements OnInit {
  fileData: File = null
  successMessage: string
  name = new FormControl("")
  myForm: FormGroup
  prestataires: Prestataires[] = []

  fileIsUploading = false
  fileUrl: string
  fileUploaded = false

  photoUploading = false
  photoUploaded = false
  photosAdded: any[] = []
  indexToUpdate
  editMode = false

  constructor(private http: HttpClient, private router: Router, private ActivatedRoute: ActivatedRoute, private domSanitizer: DomSanitizer, private formBuilder: FormBuilder, private prestatService: PrestatService) {}
  initSigninForm() {
    this.myForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      name: ["", [Validators.required]],
      photo: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      ville: ["", [Validators.required]],
      experience: ["", [Validators.required]],
      competences: ["", [Validators.required]],
      materielles: ["", [Validators.required]],
      tarif: ["", [Validators.required]],
      telephone: ["", [Validators.required]]
    })
  }

  ngOnInit() {
    this.initSigninForm()
    this.prestatService.prestatairesSubject.subscribe((data: Prestataires[]) => {
      this.prestataires = data
    })
    this.prestatService.getPrestataires()
    this.prestatService.emitPrestataires()
  }

  RegisterNewPresta() {
    const newPrestatire: Prestataires = this.myForm.value

    // if(this.fileUrl && this.fileUrl !== ""){
    //    newPrestatires.photo = this.fileUrl;
    // }

    if (this.editMode) {
      this.prestatService.updatePrestataire(newPrestatire, this.indexToUpdate)
    } else {
      this.prestatService.createPrestataire(newPrestatire)
    }
    this.router.navigate(["/profile"])
  }

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched
  }
}
