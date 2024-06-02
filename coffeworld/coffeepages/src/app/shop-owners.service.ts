import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopOwnersService {

  constructor(private http:HttpClient) { }

  getShopOwnersJson(): Observable<any>{
    return this.http.get('assets/shopowners.json');
  } 
}
