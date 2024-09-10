import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { environment } from "@environments/environment";
import { CategoryPreview } from "@interfaces/category-preview";
import { Category } from "@interfaces/category";
import { ShowcaseSlider } from "@interfaces/showcase-slider";
import { ShowcaseInfo } from "@interfaces/showcase-info";
import { ShowcaseBanners } from "@interfaces/showcase-banners";
import { ShowcaseBrands } from "@interfaces/showcase-brands";
import { ShowcaseCategories } from "@interfaces/showcase-categories";
import { ShowcaseProducts } from "@interfaces/showcase-products";
import { ProductPreview } from "@interfaces/product-preview";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  public categories(): Promise<CategoryPreview[]> {
    return this.get("catalog/categories");
  }

  public category(category: string): Promise<Category> {
    return this.get("catalog/category", { category });
  }

  public products(
    category: string,
    filter: { filter?: any, sort?: string, page?: number } = {},
  ): Promise<{
    total: number,
    products: ProductPreview[]
  }> {
    const options: any = { category };

    if (filter?.filter && Object.keys(filter.filter)) {
      options.filter = JSON.stringify(filter.filter);
    }

    if (filter?.sort) {
      options.sort = filter.sort;
    }

    if (filter?.page) {
      options.page = filter.page;
    }
    return this.get("catalog/products", options);
  }

  public showcaseSlider(): Promise<ShowcaseSlider[]> {
    return this.get("showcase/slider");
  }

  public showcaseInfo(): Promise<ShowcaseInfo[]> {
    return this.get("showcase/info");
  }

  public showcaseBanners(): Promise<ShowcaseBanners[]> {
    return this.get("showcase/banners");
  }

  public showcaseBrands(): Promise<ShowcaseBrands> {
    return this.get("showcase/brands");
  }

  public showcaseCategories(): Promise<ShowcaseCategories> {
    return this.get("showcase/categories");
  }

  public showcaseProducts(): Promise<ShowcaseProducts[]> {
    return this.get("showcase/products");
  }

  public post(endpoint: string, body = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(environment.api.host + endpoint, body, { headers: this.headers() })
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: (error: HttpErrorResponse) => reject(error),
        });
    });
  }

  public get(endpoint: string, params: any = {}, baseUrl: string = environment.api.host): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(baseUrl + endpoint, { params, headers: this.headers(), reportProgress: true })
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: (error: HttpErrorResponse) => reject(error),
        });
    });
  }

  public headers(): HttpHeaders {
    let headers = {};
    if (false) {
      headers = { user: "some user" };
    }
    return new HttpHeaders(headers);
  }
}
