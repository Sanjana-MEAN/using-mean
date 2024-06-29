import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';


import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ShopOwnersComponent } from './shop-owners/shop-owners.component';

import { ShopOwnersService} from './shop-owners.service';
import { CoffeeComponent } from './coffee/coffee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopOwnersComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule, 
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatDividerModule
  ],
  providers: [
    ShopOwnersService
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
