import { Injectable } from "@angular/core"

import * as firebase from "firebase/app"

@Injectable()
export class AuthService {
  constructor() {}

  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  signOutUser() {
    firebase.auth().signOut()
  }
}