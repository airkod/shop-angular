import { Component, Input } from "@angular/core";
import { Button } from "@interfaces/button";

@Component({
  selector: "app-banner-button",
  templateUrl: "banner-button.component.html",
  styleUrls: [ "banner-button.component.scss" ],
})
export class BannerButtonComponent {
  @Input() button: Button;
}
