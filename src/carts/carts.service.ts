import { Injectable } from '@nestjs/common';

@Injectable()
export class CartsService {
  private carts = [
    { id: 1, items: ['Bear', 'Car'] },
    { id: 2, items: ['Bike', 'Scooter'] },
  ];

  findAll() {
    return this.carts;
  }

  findById(id: number) {
    return this.carts.find((cart) => cart.id === id);
  }
}
