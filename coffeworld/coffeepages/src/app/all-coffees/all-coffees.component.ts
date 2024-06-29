import { Component,OnInit } from '@angular/core';
import { ShopOwnersService } from '../shop-owners.service';

@Component({
  selector: 'app-all-coffees',
  templateUrl: './all-coffees.component.html',
  styleUrls: ['./all-coffees.component.css']
})
export class AllCoffeesComponent implements OnInit{
  shopowner: any;
  coffees: any[] = [];

  constructor(public shopOwnersService: ShopOwnersService){}

  ngOnInit(): void {
    this.shopOwnersService.getShopOwnersJson().subscribe(shopowners => {
      this.shopowner = shopowners;
      this.coffees = shopowners.reduce((acc: any[], shopowner: any) =>
        [...acc, ...shopowner.coffees], []);
      console.log('coffee', this.coffees);
      });
    }
    
  }

