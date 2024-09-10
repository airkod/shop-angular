import { Component, ElementRef, HostListener, Input, ViewChild } from "@angular/core";
import { ApiService } from "@services/api.service";
import { CategoryPreview } from "@interfaces/category-preview";
import { Routes } from "@directives/nav/routes";

@Component({
  selector: "app-categories",
  templateUrl: "categories.component.html",
  styleUrls: [ "categories.component.scss" ],
})
export class CategoriesComponent {
  @Input() isStatic: boolean = true;
  @ViewChild("categoriesRef") categoriesRef: ElementRef;

  protected readonly Routes = Routes;

  categories: CategoryPreview[] = [];
  isVisible: boolean = false;

  constructor(api: ApiService) {
    api.categories().then((categories: CategoryPreview[]) => {
      this.categories = this.organize(categories);
    });
  }

  organize(categories: CategoryPreview[]): CategoryPreview[] {
    categories.forEach((category: CategoryPreview) => {
      category.categories.sort((a: CategoryPreview, b: CategoryPreview) => {
        return b.categories.length - a.categories.length;
      });

      const virtualCategory: CategoryPreview = {
        icon: "more",
        title: "Еще",
        categories: [],
      };

      for (let i: number = 0; i < category.categories.length; i++) {
        if (category.categories.length > 1 && !category.categories[i].categories.length) {
          virtualCategory.categories.push({ ...category.categories[i] });
        }
      }

      if (virtualCategory.categories.length && virtualCategory.categories.length < category.categories.length) {
        const categories: CategoryPreview[] = [];

        for (let i: number = 0; i < category.categories.length; i++) {
          if (!(category.categories.length > 1 && !category.categories[i].categories.length)) {
            categories.push(category.categories[i]);
          }
        }

        category.categories = categories;
        category.categories.push(virtualCategory);
      }
    });

    return categories;
  }

  @HostListener("document:mousedown", [ "$event" ])
  onGlobalClick(event: MouseEvent): void {
    if (!this.categoriesRef.nativeElement.contains(event.target)) {
      this.isVisible = false;
    }
  }
}
