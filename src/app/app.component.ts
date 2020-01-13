import { Component } from "@angular/core";
import {
  FrameworkConfigService,
  FrameworkConfigSettings
} from "src/fw/services/framework-config.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private frameworkConfigService: FrameworkConfigService) {
    let config: FrameworkConfigSettings = {
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800,
      socialIcons: [
        {
          imageFile: "assets/fb.png",
          alt: "Facebook",
          link: "https://www.facebook.com/"
        },
        {
          imageFile: "assets/google.png",
          alt: "Google",
          link: "https://www.google.com/"
        },
        {
          imageFile: "assets/twitter.png",
          alt: "Twitter",
          link: "https://www.twitter.com/"
        }
      ]
    };

    frameworkConfigService.configure(config);
  }
}
