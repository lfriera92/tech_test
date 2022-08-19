import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryDetailsComponent} from "./category-details/category-details.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'films',
    pathMatch: "full"
  },
  {
    path: ':category',
    component: CategoryListComponent
  },
  {
    path: ':category/:id',
    component: CategoryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
