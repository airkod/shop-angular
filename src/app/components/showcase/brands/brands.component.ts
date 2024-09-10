import { Component } from "@angular/core";
import { ShowcaseBrands } from "@interfaces/showcase-brands";
import { ApiService } from "@services/api.service";
import { Routes } from "@directives/nav/routes";

@Component({
  selector: "app-brands",
  templateUrl: "brands.component.html",
  styleUrls: [ "brands.component.scss" ],
})
export class BrandsComponent {
  brands: ShowcaseBrands;

  constructor(api: ApiService) {
    api.showcaseBrands().then(b => this.brands = b);
  }

  protected readonly Routes = Routes;
}
