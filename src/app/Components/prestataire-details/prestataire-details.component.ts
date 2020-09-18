import { Component, OnInit } from "@angular/core"

import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http"
import { ActivatedRoute, Router } from "@angular/router"
import { Observable } from "rxjs"
import { Prestataires } from "../../models/prestataire.model"

@Component({
  selector: "app-prestataire-details",
  templateUrl: "./prestataire-details.component.html",
  styleUrls: ["./prestataire-details.component.css"]
})
export class PrestataireDetailsComponent implements OnInit {
  prestataire: Prestataires
  prestataires: Prestataires[]
  id
  constructor(public http: HttpClient, private ActivatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {}
}
