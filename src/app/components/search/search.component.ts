import { Component, Input } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "search.component.html",
  styleUrls: [ "search.component.scss" ],
})
export class SearchComponent {
  @Input() compact: boolean = false;

  backdrop: HTMLDivElement;

  showBackdrop(): void {
    if (this.backdrop) {
      this.hideBackdrop();
    }
    this.backdrop = document.createElement("div");
    this.backdrop.className = "position-fixed z-i-10 w-100 h-100 bgc-light-50 top-0 left-0 bg-blr-30 anim-2 search-backdrop anim-in-op-2";
    document.body.append(this.backdrop);
  }

  hideBackdrop(): void {
    this.backdrop.classList.add("op-0");
    setTimeout(() => {
      this.backdrop.remove();
      this.backdrop = null;
    }, 100);
  }
}
