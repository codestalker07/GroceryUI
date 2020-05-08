import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VegitablesComponent } from './components/vegitables/vegitables.component';
import { FruitsComponent } from './components/fruits/fruits.component';
import { GroceriesComponent } from './components/groceries/groceries.component';
import { RiceComponent } from './components/rice/rice.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
{
  path:'veg',
  component:VegitablesComponent
},
{
  path:'fru',
  component:FruitsComponent
},
{
  path:'gro',
  component:GroceriesComponent
},
{
  path:'rice',
  component:RiceComponent
},
{
  path:'cart',
  component:CartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
