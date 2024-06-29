import { Component ,OnInit} from '@angular/core';
import { ShopOwnersService } from '../shop-owners.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit{
  shopowner: any;
  // coffee: any[] = [];
  coffees: any[] = [];
  displayAllCoffee: boolean = false;

  constructor(public shopOwnersService: ShopOwnersService, public activatedRoute: ActivatedRoute){}

  ngOnInit(){
    const id = +(this.activatedRoute.snapshot.params['id'] ?? 0);
    if(id){
      this.getShopOwnersCoffee(id);
    }
    else{
    //  this.displayAllCoffees();
     this.displayAllCoffee = true; 
    }
    }

    // displayAllCoffees(){
    //   return this.shopOwnersService.getShopOwnersJson().subscribe(shopowners => {
    //     this.coffees = shopowners.reduce((acc: any[], shopowner: any) =>
    //       [...acc, ...shopowner.coffees], []);
    //     console.log('coffee', this.coffees);
    //     });
    //   }

    getShopOwnersCoffee(id: number){
      return this.shopOwnersService.getshopownersById(id).subscribe(shopowners => {
      this.shopowner = shopowners;
      this.coffees = shopowners.coffees;
      })
  }

}

   