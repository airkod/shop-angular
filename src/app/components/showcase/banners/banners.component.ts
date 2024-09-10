import { Component } from "@angular/core";
import { ShowcaseBanners } from "@interfaces/showcase-banners";
import { ApiService } from "@services/api.service";

@Component({
  selector: "app-banners",
  templateUrl: "banners.component.html",
  styleUrls: [ "banners.component.scss" ],
})
export class BannersComponent {
  banners: ShowcaseBanners[];

  constructor(api: ApiService) {
    api.showcaseBanners().then(b => this.banners = b);
  }

  protected readonly Math = Math;
}
