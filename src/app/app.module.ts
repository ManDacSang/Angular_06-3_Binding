import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProduct2Component } from './list-product2/list-product2.component';
import { ListCatalogComponent } from './list-catalog/list-catalog.component';
import { Cau3Component } from './cau3/cau3.component';
import { Cau4Component } from './cau4/cau4.component';
import { Cau5Component } from './cau5/cau5.component';
import { Cau6Component } from './cau6/cau6.component';
import { Cau7Component } from './cau7/cau7.component';
import { Cau8Component } from './cau8/cau8.component';
import { Cau9Component } from './cau9/cau9.component';
import { Cau11Component } from './cau11/cau11.component';
import { Cau12Component } from './cau12/cau12.component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { Cau10Component } from './cau10/cau10.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ListComponent,
    DetailComponent,
    ProductComponent,
    ListProductComponent,
    ListProduct2Component,
    ListCatalogComponent,
    Cau3Component,
    Cau4Component,
    Cau5Component,
    Cau6Component,
    Cau7Component,
    Cau8Component,
    Cau9Component,
    Cau11Component,
    Cau12Component,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    Cau10Component,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
