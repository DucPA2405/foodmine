import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Food } from '../shared/models/Foods';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  addToCart(food:Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem){
      return;
    }
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId:number) : void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: any, quantity:number){
    let cartItem = this.cart.items.find( item => item.food.id === foodId );
    if(!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  getCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum, CurrentItem) => prevSum + CurrentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, CurrentItem) => prevSum + CurrentItem.quantity, 0)
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }
}
