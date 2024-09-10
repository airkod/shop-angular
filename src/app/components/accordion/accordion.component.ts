import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "accordion.component.html",
  styleUrls: [ "accordion.component.scss" ],
})
export class AccordionComponent implements AfterViewInit, OnChanges {
  @Input() title: string;
  @Input() opened: boolean = true;
  @Input() maxHeight: number = null;

  @ViewChild("contentRef") contentRef: ElementRef;
  @ViewChild("subContentRef") subContentRef: ElementRef;

  ngAfterViewInit(): void {
    this.setActualSize();
  }

  toggle(): void {
    this.opened = !this.opened;
    this.setActualSize();
  }

  ngOnChanges(): void {
    setTimeout(() => this.setActualSize(), 10);
  }

  setActualSize(): void {
    if (this.contentRef) {
      if (this.maxHeight) {
        this.subContentRef.nativeElement.style.maxHeight = this.maxHeight + "px";
      }
      if (this.opened) {
        const height = this.subContentRef.nativeElement.getBoundingClientRect().height;
        this.contentRef.nativeElement.style.height = height + "px";
      } else {
        this.contentRef.nativeElement.style.height = "0px";
      }
    }
  }
}
