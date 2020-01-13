import { Component, OnInit } from "@angular/core";
import {
  FrameworkConfigService,
  FrameworkConfigSettings
} from "src/fw/services/framework-config.service";

@Component({
  selector: "fw-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {
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

  ngOnInit() {}
}
