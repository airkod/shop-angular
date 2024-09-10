import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import { File } from "@interfaces/file";

@Directive({
  selector: "[image]",
})
export class ImageDirective implements OnInit {
  @Input() image: File;

  constructor(protected elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.setAttribute('src', this.image.src);
    this.elementRef.nativeElement.setAttribute('alt', this.image.alt);
    this.elementRef.nativeElement.setAttribute('title', this.image.title);
  }
}
