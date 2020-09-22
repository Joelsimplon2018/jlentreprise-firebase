import { Component, OnInit } from "@angular/core"
import { Prestataires } from "../../../models/prestataire.model"
import { PrestatService } from "../../../services/prestat.service"
import { AuthService } from "../../../services/auth.service"
import { Subscription } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: "app-admin-dasboard",
  templateUrl: "./admin-dasboard.component.html",
  styleUrls: ["./admin-dasboard.component.css"]
})
export class AdminDasboardComponent implements OnInit {
  prestataire
  prestataires: Prestataires[]
  indexToRemove

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
    this.router.navigate(["/prestataire", id])
  }
  // onDeleteProperty(index) {
  //   $('#deletePropertyModal').modal('show');
  //   this.indexToRemove = index;
  // }

  ngOnDestroy() {
    this.prestataireSubscription.unsubscribe()
  }

  onEditPrestataire(prestataire: Prestataires) {}
}
