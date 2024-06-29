import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopOwnersComponent } from './shop-owners/shop-owners.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { AllCoffeesComponent } from './all-coffees/all-coffees.component';

const routes: Routes = [
  { path: '', redirectTo: '/allcoffees', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop-owners', component: ShopOwnersComponent },
  { path: 'coffee/:id', component: CoffeeComponent },
  { path: 'allcoffees', component: AllCoffeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
