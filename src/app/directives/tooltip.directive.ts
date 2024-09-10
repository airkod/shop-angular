import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[tooltip]",
})
export class TooltipDirective {
  @Input() tooltip: string;

  @Input() offset: number = 3;

  @Input() placement:
    "top" |
    "right" |
    "bottom" |
    "left" = "bottom";

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

  protected tooltipElementRef: HTMLDivElement;

  constructor(private elementRef: ElementRef) {}

  @HostListener("mouseenter")
  mouseEnter(): void {
    const nativeElementRect: DOMRect = this.elementRef.nativeElement.getBoundingClientRect();

    if (this.tooltipElementRef) {
      this.tooltipElementRef.remove();
      this.tooltipElementRef = null;
    }

    this.tooltipElementRef = document.createElement("div");

    this.tooltipElementRef.classList.add("tip");
    this.tooltipElementRef.classList.add(this.color);

    this.tooltipElementRef.innerHTML = this.tooltip;

    this.tooltipElementRef.style.top = "-1000px";
    this.tooltipElementRef.style.left = "-1000px";

    document.body.append(this.tooltipElementRef);

    const tooltipRect: DOMRect = this.tooltipElementRef.getBoundingClientRect();

    let x: number = 0;
    let y: number = 0;

    if (this.placement === "top") {
      y = nativeElementRect.y - this.offset - nativeElementRect.height;
      x = nativeElementRect.x + (nativeElementRect.width / 2) - (tooltipRect.width / 2);

    } else if (this.placement === "right") {
      y = nativeElementRect.y + (nativeElementRect.height / 2) - (tooltipRect.height / 2);
      x = nativeElementRect.x + nativeElementRect.width + this.offset;

    } else if (this.placement === "bottom") {
      y = nativeElementRect.y + nativeElementRect.height + this.offset;
      x = nativeElementRect.x + (nativeElementRect.width / 2) - (tooltipRect.width / 2);

    } else if (this.placement === "left") {
      y = nativeElementRect.y + (nativeElementRect.height / 2) - (tooltipRect.height / 2);
      x = nativeElementRect.x - tooltipRect.width - this.offset;
    }

    this.tooltipElementRef.style.top = y + "px";
    this.tooltipElementRef.style.left = x + "px";
  }

  @HostListener("mouseleave")
  mouseLeave(): void {
    this.tooltipElementRef.remove();
    this.tooltipElementRef = null;
  }
}
