import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import { Icon } from "@directives/ms/types/icon";
import { Weight } from "@directives/ms/types/weight";
import { Grade } from "@directives/ms/types/grade";
import { OpticalSize } from "@directives/ms/types/optical-size";
import { Style } from "@directives/ms/types/style";

@Directive({
  selector: "[ms]",
})
export class MsDirective implements OnInit {
  @Input() ms: Icon;
  @Input() weight: Weight = 300;
  @Input() grande: Grade = "default";
  @Input() opticalSize: OpticalSize = 24;
  @Input() style: Style = "outlined";
  @Input() fill: boolean = false;

  private grades = {
    low: -25,
    default: 0,
    high: 200,
  };

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    const grade = `'FILL' ${this.fill ? "1" : "0"}, 'wght' ${this.weight}, 'GRAD' ${this.grades[this.grande]}, 'opsz' ${this.opticalSize}`;

    this.element.nativeElement.classList.add('material-symbol');
    this.element.nativeElement.classList.add("material-symbols-" + this.style);
    this.element.nativeElement.innerHTML = this.ms;
    this.element.nativeElement.style.fontVariationSettings = grade;
  }
}
