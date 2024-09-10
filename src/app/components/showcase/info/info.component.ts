import { Component } from "@angular/core";
import { ApiService } from "@services/api.service";
import { ShowcaseInfo } from "@interfaces/showcase-info";

@Component({
  selector: "app-info",
  templateUrl: "info.component.html",
  styleUrls: [ "info.component.scss" ],
})
export class InfoComponent {
  info: ShowcaseInfo[];

  constructor(api: ApiService) {
    api.showcaseInfo().then(i => this.info = i);
  }
}
