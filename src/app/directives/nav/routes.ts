import { CategoryPreview } from "@interfaces/category-preview";
import { Brand } from "@interfaces/brand";
import { ProductPreview } from "@interfaces/product-preview";
import { HttpParams } from "@angular/common/http";

export class Routes {
  public static notFound(): string {
    return "not-found";
  }

  public static home(): string {
    return "/";
  }

  public static brand(brand: Brand): string {
    return "catalog/brand/" + brand.url;
  }

  public static catalog(category?: CategoryPreview, request: { filter?: any, sort?: string, page?: number } = {}): string {
    let url = "catalog";
    if (category) {
      url += "/" + category.url;
    }

    const options: any = {};

    if (request.page && request.page > 1) {
      options.page = request.page;
    }

    if (request.sort) {
      options.sort = request.sort;
    }

    if (request.filter && Object.keys(request.filter)) {
      const filters: any = {};
      for (const [ url, values ] of Object.entries(request.filter)) {
        if ((<[]> values).length) {
          filters[url] = values;
        }
      }
      if (Object.keys(filters).length) {
        options.filter = JSON.stringify(filters);
      }
    }

    if (Object.keys(options).length) {
      return url + "?" + (new HttpParams({ fromObject: options })).toString();
    }
    return url;
  }

  public static product(product: ProductPreview): string {
    return "product/" + product.url;
  }
}
