import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularConceptsPracticeComponent } from './angular-concepts-practice/angular-concepts-practice.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularConceptsPracticeComponent,
    ProductComponentComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    ErrorComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
