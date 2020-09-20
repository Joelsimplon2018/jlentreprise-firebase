import { Component, OnInit } from "@angular/core"

import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http"
import { ActivatedRoute, Router } from "@angular/router"
import { Observable } from "rxjs"
import { Prestataires } from "../../models/prestataire.model"
import { PrestatService } from "../../services/prestat.service"

@Component({
  selector: "app-prestataire-details",
  templateUrl: "./prestataire-details.component.html",
  styleUrls: ["./prestataire-details.component.css"]
})
export class PrestataireDetailsComponent implements OnInit {
  prestataire: Prestataires
  prestataires: Prestataires[]
  id
  constructor(private ActivatedRoute: ActivatedRoute, private route: ActivatedRoute, private router: Router, private prestatService: PrestatService) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"]
    this.prestatService.getSinglePrestataire(+id).then((prestataire: Prestataires) => {
      this.prestataire = prestataire
    })
  }
  onBack() {
    this.router.navigate(["/"])
  }
}
