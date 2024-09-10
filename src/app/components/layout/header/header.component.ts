import { Component, HostListener } from "@angular/core";
import { Routes } from "@directives/nav/routes";
import { ActivatedRoute, Event, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "header.component.html",
  styleUrls: [ "header.component.scss" ],
})
export class HeaderComponent {
  protected readonly Routes = Routes;
  isStatic: boolean = false;
  fixed: boolean = true;
  categoriesOpened: boolean = false;

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isStatic = !!activatedRoute.snapshot.firstChild.data["categoriesOpened"];
        this.categoriesOpened = !!activatedRoute.snapshot.firstChild.data["categoriesOpened"];
      }
    });
  }

  @HostListener("window:scroll", [ "$event" ])
  scroll(): void {
    if (this.categoriesOpened) {
      this.isStatic = window.scrollY <= 111;
    } else {
      this.isStatic = false;
    }
    this.fixed = window.scrollY >= 111;
  }
}
