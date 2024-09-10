import { Component } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Category } from "@interfaces/category";
import { ApiService } from "@services/api.service";
import { Routes } from "@directives/nav/routes";
import { MetaService } from "@services/meta.service";
import { ProductPreview } from "@interfaces/product-preview";
import { CategoryPreview } from "@interfaces/category-preview";
import { combineLatest } from "rxjs";

@Component({
  selector: "app-catalog",
  templateUrl: "catalog.component.html",
  styleUrls: [ "catalog.component.scss" ],
})
export class CatalogComponent {
  protected readonly Routes = Routes;

  total: number;
  products: ProductPreview[];
  category: Category;

  request: {
    filter?: any,
    sort?: string,
    page?: number,
  } = {};

  constructor(
    private router: Router,
    activatedRoute: ActivatedRoute,
    api: ApiService,
  ) {
    combineLatest([
      activatedRoute.queryParams,
      activatedRoute.params,
    ]).subscribe(([ params, data ]) => {
      this.request.filter = {};
      try {
        const filter = JSON.parse(params["filter"]);
        if (Object.keys(filter).length) {
          this.request.filter = filter;
        }
      } catch {}

      this.request.page = params["page"];
      this.request.sort = params["sort"];

      if (data["category"]) {
        Promise.all([
          api.category(data["category"]),
          api.products(data["category"], this.request),
        ])
          .then(([ category, productsData ]) => {
            this.category = category;
            MetaService.set(this.category.meta);

            console.log(this.category);

            this.total = productsData.total;
            this.products = productsData.products;

          })
          .catch((e) => {
            // console.error(e);
            // router.navigateByUrl(Routes.notFound())
          });
      }
    });
  }

  updateCategory(category: CategoryPreview): void {
    this.router.navigateByUrl(Routes.catalog(category, {
      sort: this.request.sort,
    }));
  }

  updateFilters(filter: any): void {
    this.router.navigateByUrl(Routes.catalog(this.category, {
      filter: filter,
      sort: this.request.sort,
    }));
  }

  updateSort(sort: string): void {
    this.router.navigateByUrl(Routes.catalog(this.category, {
      filter: this.request.filter,
      page: this.request.page,
      sort: sort,
    }));
  }

  updatePage(page: number): void {
    this.request.page = page;
    this.router.navigateByUrl(Routes.catalog(this.category, {
      filter: this.request.filter,
      sort: this.request.sort,
      page: page,
    }));
  }
}
