import { Component, Input } from "@angular/core";
import { ProductPreview } from "@interfaces/product-preview";
import { Routes } from "@directives/nav/routes";

@Component({
  selector: "app-product-preview",
  templateUrl: "product-preview.component.html",
  styleUrls: [ "product-preview.component.scss" ],
})
export class ProductPreviewComponent {
  @Input() product: ProductPreview;
  protected readonly Routes = Routes;

  public aaa(event: MouseEvent): boolean {


    event.stopPropagation();
    return false;
  }
}
