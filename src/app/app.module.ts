import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RegisterComponent } from "./Components/register/register.component"
import { LoginComponent } from "./Components/login/login.component"
import { ContactComponent } from "./Components/contact/contact.component"
import { PrestataireListComponent } from "./Components/prestataire-list/prestataire-list.component"
import { PrestataireDetailsComponent } from "./Components/prestataire-details/prestataire-details.component"
import { PrestataireRegisterComponent } from "./Components/prestataire-register/prestataire-register.component"
import { PrestataireProfilComponent } from "./Components/prestataire-profil/prestataire-profil.component"
import { MissionFormComponent } from "./Components/mission-form/mission-form.component"
import { MissionListComponent } from "./Components/admin/mission-list/mission-list.component"
import { HeaderComponent } from "./Components/header/header.component"
import { FooterComponent } from "./Components/footer/footer.component"
import { AuthService } from "./services/auth.service"
import { PrestatService } from "./services/prestat.service"
import { MissionService } from "./services/mission.service"
import { AuthGuard } from "./security/auth.guard"
@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent, ContactComponent, PrestataireListComponent, PrestataireDetailsComponent, PrestataireRegisterComponent, PrestataireProfilComponent, MissionFormComponent, MissionListComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService, PrestatService, MissionService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
