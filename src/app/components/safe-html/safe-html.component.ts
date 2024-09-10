import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "app-safe-html",
  templateUrl: "./safe-html.component.html",
  styleUrls: [ "./safe-html.component.scss" ],
})
export class SafeHtmlComponent implements OnInit {
  @Input() content: string;
  sanitizedHtml: SafeHtml;

  constructor(public domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.sanitizedHtml = this.domSanitizer.bypassSecurityTrustHtml(this.content);
  }
}
