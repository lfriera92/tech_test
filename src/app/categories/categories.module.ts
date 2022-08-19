import {NgModule} from "@angular/core";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryDetailsComponent} from "./category-details/category-details.component";
import {CategoriesRoutingModule} from "./categories-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "../app.service";
import {CategoriesComponent} from "./categories.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent,
    CategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CategoriesRoutingModule
  ],
  providers: [AppService]
})

export class CategoriesModule {

}
