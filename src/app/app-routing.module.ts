import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';

const routes: Routes = [
  { path: 'product', component: ProductComponentComponent },
  { path: '**', component: ErrorComponentComponent }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
