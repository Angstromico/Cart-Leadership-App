import { BadRequestException, Injectable } from '@nestjs/common';
import type { Cart, OptionalCart } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CartsService {
  private carts: Cart[] = [
    { id: uuidv4(), items: ['Bear', 'Car'] },
    { id: uuidv4(), items: ['Bike', 'Scooter'] },
  ];

  findAll() {
    return this.carts;
  }

  findById(id: string) {
    return this.carts.find((cart) => cart.id === id);
  }

  create(cartData?: OptionalCart) {
    if (cartData) {
      if (!cartData.id || !cartData.items) {
        throw new BadRequestException('Invalid cart data');
      }

      const newCart: Cart = {
        id: cartData.id,
        items: cartData.items,
      };
      this.carts.push(newCart);
      return newCart;
    }
    return null;
  }

  update(id: string, cartData: OptionalCart) {
    const cartIndex = this.carts.findIndex((cart) => cart.id === id);
    if (cartIndex === -1) {
      throw new BadRequestException(`Cart with id ${id} not found`);
    }

    const existingCart = this.carts[cartIndex];
    const updatedCart: Cart = {
      id: existingCart.id,
      items: cartData.items ?? existingCart.items,
    };

    this.carts[cartIndex] = updatedCart;
    return updatedCart;
  }

  delete(id: string) {
    const cartIndex = this.carts.findIndex((cart) => cart.id === id);
    if (cartIndex === -1) {
      throw new BadRequestException(`Cart with id ${id} not found`);
    }

    this.carts.splice(cartIndex, 1);
    return { message: `Cart with id ${id} deleted successfully` };
  }
}
