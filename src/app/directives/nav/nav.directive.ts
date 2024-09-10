import { Directive, ElementRef, Input, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@Directive({
  selector: "[nav]",
})
export class NavDirective implements OnInit {
  @Input() nav: string;

  constructor(
    private element: ElementRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.element.nativeElement.setAttribute("href", this.nav);
  }

  @HostListener("click", [ "$event" ])
  public onClick() {
    const href = this.element.nativeElement.getAttribute("href");
    if (href.startsWith('http')) {
      return true;
    }
    this.router.navigateByUrl(href);
    return false;
  }
}
