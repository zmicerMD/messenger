import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { MessengerPageComponent } from './main-page/pages/messenger-page/messenger-page.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MessageComponent} from "../standalone/message/message.component";
import {AdDirective} from "../directives/ad.directive";



@NgModule({
  declarations: [
    MainPageComponent,
    MessengerPageComponent,
    AdDirective
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatSidenavModule,
    MatInputModule,
    ReactiveFormsModule,
    MessageComponent,
  ]
})
export class PagesModule { }
