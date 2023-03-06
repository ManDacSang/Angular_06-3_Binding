import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProduct2Component } from './list-product2/list-product2.component';
import { ListCatalogComponent } from './list-catalog/list-catalog.component';
import { DetailComponent } from './detail/detail.component';
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

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'list-product', component: ListProductComponent },
  { path: 'list-product2', component: ListProduct2Component },
  { path: 'list-catalog', component: ListCatalogComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'cau3', component: Cau3Component },
  { path: 'cau4', component: Cau4Component },
  { path: 'cau5', component: Cau5Component },
  { path: 'cau6', component: Cau6Component },
  { path: 'cau7', component: Cau7Component },
  { path: 'cau8', component: Cau8Component },
  { path: 'cau9', component: Cau9Component },
  { path: 'cau11', component: Cau11Component },
  { path: 'cau12', component: Cau12Component },
  {
    path: 'service-product-image-event',
    component: ServiceProductImageEventComponent,
  },
  {
    path: 'service-product-image-event/:id',
    component: ServiceProductImageEventDetailComponent,
  },
];
@NgModule({
  declarations: [],
  // imports: [CommonModule],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [
  ProductComponent,
  ListProductComponent,
  ListProduct2Component,
  ListCatalogComponent,
  DetailComponent,
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
];
