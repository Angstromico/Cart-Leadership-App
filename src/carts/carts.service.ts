import { BadRequestException, Injectable } from '@nestjs/common';

export interface Cart {
  id: number;
  items: string[];
}

export interface OptionalCart {
  id?: number;
  items?: string[];
}

@Injectable()
export class CartsService {
  private carts: Cart[] = [
    { id: 1, items: ['Bear', 'Car'] },
    { id: 2, items: ['Bike', 'Scooter'] },
  ];

  findAll() {
    return this.carts;
  }

  findById(id: number) {
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

  update(id: number, cartData: OptionalCart) {
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

  delete(id: number) {
    const cartIndex = this.carts.findIndex((cart) => cart.id === id);
    if (cartIndex === -1) {
      throw new BadRequestException(`Cart with id ${id} not found`);
    }

    this.carts.splice(cartIndex, 1);
    return { message: `Cart with id ${id} deleted successfully` };
  }
}
