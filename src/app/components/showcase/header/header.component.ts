import { Component, ContentChild, ElementRef, Input } from "@angular/core";

@Component({
  selector: "app-showcase-header",
  templateUrl: "header.component.html",
  styleUrls: [ "header.component.scss" ],
})
export class ShowcaseHeaderComponent {
  @ContentChild("content") content: ElementRef;
  @Input() title: string;
}
