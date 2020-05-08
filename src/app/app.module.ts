import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VegitablesComponent } from './components/vegitables/vegitables.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { GroceriesComponent } from './components/groceries/groceries.component';
import { RiceComponent } from './components/rice/rice.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VegitablesComponent,
    FruitsComponent,
    GroceriesComponent,
    RiceComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
