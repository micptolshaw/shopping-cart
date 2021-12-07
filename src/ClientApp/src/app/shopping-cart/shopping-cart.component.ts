import { Component } from '@angular/core';
import { ShoppingCartService, CartItem, Totals, CartItem as ICartItem } from '../shopping-cart.service';
import { DATA_ITEMS } from "../../data";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  name = 'Shopping Cart';

  productList: CartItem[] = DATA_ITEMS;
//  productList = this.shoppingCartService.productList$;

constructor(private shoppingCartService: ShoppingCartService) { }

  addItemToCart(item: CartItem) {
    this.shoppingCartService.addCartItem(item);
  }

  remove(item: CartItem): void {
    this.shoppingCartService.removeCartItem(item);
  }
}
