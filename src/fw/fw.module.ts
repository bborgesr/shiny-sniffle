import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FrameworkBodyComponent } from "./framework-body/framework-body.component";
import { ContentComponent } from "./content/content.component";
import { TitleBarComponent } from "./title-bar/title-bar.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { StatusBarComponent } from "./status-bar/status-bar.component";
import { ScreenLarge } from "./directives/screen-large.directive";
import { ScreenBelowLarge } from "./directives/screen-below-large.directive";

@NgModule({
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLarge,
    ScreenBelowLarge
  ],
  imports: [CommonModule],
  exports: [FrameworkBodyComponent]
})
export class FwModule {}
