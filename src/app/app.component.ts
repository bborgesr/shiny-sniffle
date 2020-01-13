import { Component } from "@angular/core";
import { MenuService } from "src/fw/services/menu.service";
import { initialMenuItems } from "./app.menu";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private menuService: MenuService) {
    menuService.items = initialMenuItems;
  }
}
