import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import { File } from "@interfaces/file";

@Directive({
  selector: "[bgImage]",
})
export class BgImageDirective implements OnInit {
  @Input() bgImage: string | File;

  @Input() side: "top" | "right" | "bottom" | "left" | "center";
  @Input() size: "cover" | "contain";

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.classList.add("bg-image");

    if (this.side) {
      this.element.nativeElement.classList.add(this.side);
    }

    if (this.size) {
      this.element.nativeElement.classList.add(this.size);
    }

    let src: any = this.bgImage;
    if (this.bgImage && typeof this.bgImage === "object") {
      try {
        src = src.src;
      } catch {}
    }

    if (src) {
      this.element.nativeElement.style.backgroundImage = "url('" + src + "')";
    }
  }
}
