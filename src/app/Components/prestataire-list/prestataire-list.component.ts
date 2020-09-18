import { Component, OnInit } from "@angular/core"
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http"
import { ActivatedRoute, Router } from "@angular/router"

@Component({
  selector: "app-prestataire-list",
  templateUrl: "./prestataire-list.component.html",
  styleUrls: ["./prestataire-list.component.css"]
})
export class PrestataireListComponent implements OnInit {
  prestataire

  constructor(public http: HttpClient, private ActivatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {}
}
