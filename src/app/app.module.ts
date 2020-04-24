import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VegitablesComponent } from './components/vegitables/vegitables.component';
import { FruitsComponent } from './components/fruits/fruits.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VegitablesComponent,
    FruitsComponent
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
