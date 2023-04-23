import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {MessengerPageComponent} from "./main-page/pages/messenger-page/messenger-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent,
    children: [
      {path: '', component: MessengerPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
