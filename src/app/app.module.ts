import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FwModule } from "src/fw/fw.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SettingsComponent } from "./settings/settings.component";
import { appRoutes } from "./app-routing.module";
import { CountryDetailComponent } from "./country-detail/country-detail.component";
import { CountryListComponent } from "./country-list/country-list.component";
import { CountryMaintComponent } from "./country-maint/country-maint.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FwModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
