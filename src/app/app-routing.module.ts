import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VegitablesComponent } from './components/vegitables/vegitables.component';
import { FruitsComponent } from './components/fruits/fruits.component';


const routes: Routes = [
{
  path:'veg',
  component:VegitablesComponent
},
{
  path:'fru',
  component:FruitsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
