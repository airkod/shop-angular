import { Directive, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit } from "@angular/core";

@Directive({
  selector: "[badge]",
})
export class BadgeDirective implements OnInit, OnChanges, OnDestroy {
  @Input() badge: string | number;
  @Input() color:
    "primary" |
    "secondary" |
    "success" |
    "info" |
    "warning" |
    "danger" |
    "light" |
    "dark" |
    "blue" |
    "indigo" |
    "purple" |
    "pink" |
    "red" |
    "orange" |
    "yellow" |
    "green" |
    "teal" |
    "cyan" |
    "black" |
    "white" |
    "gray" |
    "gray-dark" |
    "gray-light" = "primary";

  badgeElementRef: HTMLDivElement;

  constructor(private elementRef: ElementRef) {}

  public ngOnChanges(): void {
    if (this.badgeElementRef) {
      this.setValue();
    }
  }

  public ngOnDestroy(): void {
    if (this.badgeElementRef) {
      this.badgeElementRef.remove();
      this.badgeElementRef = null;
    }
  }

  public ngOnInit(): void {
    this.badgeElementRef = document.createElement("div");

    this.badgeElementRef.classList.add("bdg");
    this.badgeElementRef.classList.add("cs-" + this.color);

    this.setValue();

    document.body.append(this.badgeElementRef);

    let intervalIndex: number = 0;
    const interval = setInterval(() => {
      this.setPosition();
      if (intervalIndex > 50) {
        clearInterval(interval);
      }
      intervalIndex++;
    }, 10);

    setTimeout(() => this.setPosition(), 500);
  }

  @HostListener("window:scroll")
  @HostListener("window:resize")
  setPosition(): void {
    const nativeElementRect: DOMRect = this.elementRef.nativeElement.getBoundingClientRect();

    if (this.badgeElementRef) {
      this.badgeElementRef.style.top = (nativeElementRect.y - 5) + "px";
      this.badgeElementRef.style.left = (nativeElementRect.x + nativeElementRect.width - 15) + "px";
    }
  }

  setValue(): void {
    let badge = null;
    if ((typeof this.badge === "number" && this.badge > 0) || typeof this.badge === "string") {
      badge = this.badge.toString();
    }

    if (badge) {
      this.badgeElementRef.innerHTML = badge.toString();
    } else {
      this.badgeElementRef.classList.add("d-none");
    }
  }
}
