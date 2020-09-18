import { Injectable } from "@angular/core"
import * as firebase from "firebase"
import { Prestataires } from "../models/prestataire.model"
import { Subject } from "rxjs"
import Datasnapshot = firebase.database.DataSnapshot

@Injectable({
  providedIn: "root"
})
export class PrestatService {
  prestataires: Prestataires[] = []

  prestatairesSubject = new Subject<Prestataires[]>()
  constructor() {
    this.getPrestataires()
  }

  emitPrestataires() {
    this.prestatairesSubject.next(this.prestataires)
  }

  savePrestataire() {
    firebase
      .database()
      .ref("/prestataire")
      .set(this.prestataires)
  }

  createPrestataire(prestataires: Prestataires) {
    this.prestataires.push(prestataires)
    this.savePrestataire()
    this.emitPrestataires()
  }

  getPrestataires() {
    firebase
      .database()
      .ref("/prestataire")
      .on("value", (data: Datasnapshot) => {
        this.prestataires = data.val() ? data.val() : []
        this.emitPrestataires()
      })
  }

  getSinglePrestataire(id: number) {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref("/prestataire/" + id)
        .once("value")
        .then(
          (data: Datasnapshot) => {
            resolve(data.val())
          },
          error => {
            reject(error)
          }
        )
    })
  }

  removePrestataire(prestataire: Prestataires) {
    const prestataireIndexToRemove = this.prestataires.findIndex(prestatailEl => {
      if (prestatailEl === prestataire) {
        return true
      }
    })
    this.prestataires.splice(prestataireIndexToRemove, 1)
    this.savePrestataire()
    this.emitPrestataires()
  }

  deletePrespataire(index) {
    this.prestataires.splice(index, 1)
    this.savePrestataire()
    this.emitPrestataires()
  }

  updatePrestataire(prestataire: Prestataires, index) {
    firebase
      .database()
      .ref("/prestataire/" + index)
      .update(prestataire)
      .catch(error => {
        console.error(error)
      })
  }
}
