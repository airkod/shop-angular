import { Component } from "@angular/core";
import { ApiService } from "@services/api.service";
import { ShowcaseSlider } from "@interfaces/showcase-slider";

@Component({
  selector: "app-hero-slider",
  templateUrl: "hero-slider.component.html",
  styleUrls: [ "hero-slider.component.scss" ],
})
export class HeroSliderComponent {
  slider: ShowcaseSlider[];

  constructor(api: ApiService) {
    api.showcaseSlider().then(s => this.slider = s);
  }
}
