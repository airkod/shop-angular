import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Icon } from "@directives/ms/types/icon";

@Component({
  selector: "app-icon-button",
  templateUrl: "icon-button.component.html",
  styleUrls: [ "icon-button.component.scss" ],
})
export class IconButtonComponent implements OnInit {
  @Input() icon: Icon;
  @Input() title: string;
  @Input() titleClicked: string;
  @Input() placement: "top" | "right" | "bottom" | "left" = "top";
  @Input() style:
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

  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  tooltip: string;

  public ngOnInit() {
    this.tooltip = this.title;
  }

  public mouseleave(): void {
    setTimeout(() => {
      this.tooltip = this.title;
    }, 300);
  }

  public clicked(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this.click.emit();
    if (this.titleClicked) {
      this.tooltip = this.titleClicked;
    }
  }
}
