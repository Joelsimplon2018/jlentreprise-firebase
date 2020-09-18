import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { AppComponent } from "./app.component"
import { PrestataireRegisterComponent } from "../app/Components/prestataire-register/prestataire-register.component"
import { ContactComponent } from "../app/Components/contact/contact.component"
import { PrestataireListComponent } from "../app/Components/prestataire-list/prestataire-list.component"
import { RegisterComponent } from "../app/Components/register/register.component"
import { LoginComponent } from "../app/Components/login/login.component"
import { MissionFormComponent } from "../app/Components/mission-form/mission-form.component"
import { PrestataireDetailsComponent } from "../app/Components/prestataire-details/prestataire-details.component"
import { PrestataireProfilComponent } from "../app/Components/prestataire-profil/prestataire-profil.component"

const routes: Routes = [{ path: "", component: PrestataireListComponent }, { path: "prestataireRegister", component: PrestataireRegisterComponent }, { path: "contact", component: ContactComponent }, { path: "register", component: RegisterComponent }, { path: "login", component: LoginComponent }, { path: "mission", component: MissionFormComponent }, { path: "prestataire/:id", component: PrestataireDetailsComponent }, { path: "profile", component: PrestataireProfilComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
