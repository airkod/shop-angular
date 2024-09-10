import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MasterComponent } from "@pages/master/master.component";
import { NotFoundComponent } from "@pages/not-found/not-found.component";
import { IndexComponent } from "@pages/master/index/index.component";
import { CatalogComponent } from "@pages/master/catalog/catalog.component";

const routes: Routes = [
  {
    path: "",
    component: MasterComponent,
    children: [
      { path: "", component: IndexComponent, data: { categoriesOpened: true } },
      { path: "catalog", component: CatalogComponent },
      { path: "catalog/:category", component: CatalogComponent },
    ],
  },
  {
    path: "**",
    pathMatch: "full",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
