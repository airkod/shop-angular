import { Component } from "@angular/core";
import { ShowcaseCategories } from "@interfaces/showcase-categories";
import { ApiService } from "@services/api.service";
import { Routes } from "@directives/nav/routes";

@Component({
  selector: "app-top-categories",
  templateUrl: "top-categories.component.html",
  styleUrls: [ "top-categories.component.scss" ],
})
export class TopCategoriesComponent {
  categories: ShowcaseCategories;

  constructor(api: ApiService) {
    api.showcaseCategories().then(c => this.categories = c);
  }

  protected readonly Routes = Routes;
}
