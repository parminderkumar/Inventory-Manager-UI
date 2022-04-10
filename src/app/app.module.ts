import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router, RouterModule, Routes} from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Importing the pagination module for the application.
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemAddComponent } from './items/item-add/item-add.component';
import { ItemUpdateComponent } from './items/item-update/item-update.component';
import { WarehousesComponent } from './warehouses/warehouses.component';


const appRoutes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'warehouses', component: WarehousesComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemAddComponent,
    ItemUpdateComponent,
    WarehousesComponent
  ],
  imports: [
    BrowserModule,
NgbModule,
HttpClientModule,
FormsModule,
MatInputModule,
NgxSpinnerModule,
NgxPaginationModule ,
BrowserAnimationsModule,
        RouterModule.forRoot(
      appRoutes
    ),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
