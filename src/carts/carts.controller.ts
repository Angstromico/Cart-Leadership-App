import { Controller, Get, Param } from '@nestjs/common';

@Controller('carts')
export class CartsController {
  private carts = [
    { id: 1, items: ['Bear', 'Car'] },
    { id: 2, items: ['Bike', 'Scooter'] },
  ];

  @Get()
  getCarts() {
    return this.carts;
  }

  @Get(':id')
  getCartById(@Param('id') id: string) {
    console.log('Fetching cart with id:', id);
    const numberId = parseInt(id, 10);
    if (isNaN(numberId)) {
      return { message: 'Invalid cart ID' };
    }
    const cart = this.carts.find((cart) => cart.id === numberId);

    return cart ? cart : { message: 'Cart not found' };
  }
}
