import { Component, OnInit  } from '@angular/core';
import {ShopOwnersService} from '../shop-owners.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop-owners',
  templateUrl: './shop-owners.component.html',
  styleUrls: ['./shop-owners.component.css']
})
export class ShopOwnersComponent {
  shopowners: any[] = [];
  image: any;

  constructor(private shopOwnersService:ShopOwnersService){}

  ngOnInit(): void{
    this.shopOwnersService.getShopOwnersJson().subscribe(data =>{
      this.shopowners = data;
      this.image = data.image;
     });   
    }

  }
  