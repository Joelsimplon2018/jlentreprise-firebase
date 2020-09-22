import { Component } from "@angular/core"
import * as firebase from "firebase"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "y"
  constructor() {
    const firebaseconfig = {
      apiKey: "AIzaSyBcU5qToki95oT0hwPFRjrpTcrWlKbIs2M",
      authDomain: "jl-entreprise.firebaseapp.com",
      databaseURL: "https://jl-entreprise.firebaseio.com",
      projectId: "jl-entreprise",
      storageBucket: "jl-entreprise.appspot.com",
      messagingSenderId: "825246169122",
      appId: "1:825246169122:web:3fdcaa5d2bfa35a39a727b",
      measurementId: "G-TM3NNDKB7R"
    }
    firebase.initializeApp(firebaseconfig)

    // admin.initializeApp({
    //   credential: admin.credential.applicationDefault(),
    //   databaseURL: "https://jl-entreprise.firebaseio.com"
    // })
  }
}
