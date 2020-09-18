import { Component, OnInit } from "@angular/core"
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http"
import { ActivatedRoute, Router } from "@angular/router"
import { Prestataires } from "../../models/prestataire.model"
import { PrestatService } from "../../services/prestat.service"
import { AuthService } from "../../services/auth.service"
import { Subscription } from "rxjs"
@Component({
  selector: "app-prestataire-list",
  templateUrl: "./prestataire-list.component.html",
  styleUrls: ["./prestataire-list.component.css"]
})
export class PrestataireListComponent implements OnInit {
  prestataire
  prestataires: Prestataires[]

  prestataireSubscription: Subscription

  constructor(public http: HttpClient, private ActivatedRoute: ActivatedRoute, private router: Router, private authService: AuthService, private prestatService: PrestatService) {}

  ngOnInit() {
    this.prestataireSubscription = this.prestatService.prestatairesSubject.subscribe((prestataires: Prestataires[]) => {
      this.prestataires = prestataires
    })
    this.prestatService.emitPrestataires()
  }

  onDeletePrestataire(Prestataires: Prestataires) {
    this.prestatService.removePrestataire(Prestataires)
  }

  onViewPrestataire(id: number) {
    this.router.navigate(["/prestataire", "view", id])
  }

  ngOnDestroy() {
    this.prestataireSubscription.unsubscribe()
  }
}
