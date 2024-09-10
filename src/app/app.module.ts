import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MasterComponent } from "@pages/master/master.component";
import { SwiperModule } from "swiper/angular";
import { NgbAccordionModule, NgbPopoverModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import SwiperCore, { Autoplay, EffectFade, Grid } from "swiper";
import { DatePipe } from "@angular/common";
import { IndexComponent } from "@pages/master/index/index.component";
import { NotFoundComponent } from "@pages/not-found/not-found.component";
import { HeaderComponent } from "@components/layout/header/header.component";
import { FooterComponent } from "@components/layout/footer/footer.component";
import { MsDirective } from "@directives/ms/ms.directive";
import { CatalogComponent } from "@pages/master/catalog/catalog.component";
import { NavDirective } from "@directives/nav/nav.directive";
import { CategoriesComponent } from "@components/categories/categories.component";
import { BgImageDirective } from "@directives/bg-image.directive";
import { SafeHtmlComponent } from "@components/safe-html/safe-html.component";
import { ImageDirective } from "@directives/image.directive";
import { BannerButtonComponent } from "@components/banner-button/banner-button.component";
import { HeroSliderComponent } from "@components/showcase/hero-slider/hero-slider.component";
import { InfoComponent } from "@components/showcase/info/info.component";
import { TopCategoriesComponent } from "@components/showcase/top-categories/top-categories.component";
import { BannersComponent } from "@components/showcase/banners/banners.component";
import { BrandsComponent } from "@components/showcase/brands/brands.component";
import { ProductsComponent } from "@components/showcase/products/products.component";
import { ProductPreviewComponent } from "@components/product-preview/product-preview.component";
import { ShowcaseHeaderComponent } from "@components/showcase/header/header.component";
import { PricePipe } from "@pipes/price.pipe";
import { IconButtonComponent } from "@components/icon-button/icon-button.component";
import { TooltipDirective } from "@directives/tooltip.directive";
import { SearchComponent } from "@components/search/search.component";
import { BadgeDirective } from "@directives/badge.directive";
import { FilterComponent } from "@pages/master/catalog/filter/filter.component";
import { AccordionComponent } from "@components/accordion/accordion.component";

SwiperCore.use([ EffectFade, Grid, Autoplay ]);

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    IndexComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    MsDirective,
    CategoriesComponent,
    CatalogComponent,
    NavDirective,
    BgImageDirective,
    SafeHtmlComponent,
    ImageDirective,
    BannerButtonComponent,
    HeroSliderComponent,
    InfoComponent,
    TopCategoriesComponent,
    BannersComponent,
    BrandsComponent,
    ProductsComponent,
    ProductPreviewComponent,
    ShowcaseHeaderComponent,
    PricePipe,
    IconButtonComponent,
    TooltipDirective,
    SearchComponent,
    BadgeDirective,
    FilterComponent,
    AccordionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbPopoverModule,
    ReactiveFormsModule,
  ],
  bootstrap: [ AppComponent ],
  providers: [
    DatePipe,
  ],
})
export class AppModule {}
