import { Component } from "@angular/core";
import { ShowcaseProducts } from "@interfaces/showcase-products";
import { ApiService } from "@services/api.service";

@Component({
  selector: "app-products",
  templateUrl: "products.component.html",
  styleUrls: [ "products.component.scss" ],
})
export class ProductsComponent {
  products: ShowcaseProducts[];

  constructor(api: ApiService) {
    api.showcaseProducts().then(p => this.products = p);
  }
}
