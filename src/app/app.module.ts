import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
