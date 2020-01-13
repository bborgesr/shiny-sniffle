import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FwModule } from "src/fw/fw.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CountriesComponent } from "./countries/countries.component";
import { SettingsComponent } from "./settings/settings.component";
import { appRoutes } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountriesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
