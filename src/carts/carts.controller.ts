import { Controller, Get, Param } from '@nestjs/common';
import { CartsService } from './carts.service';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get()
  getCarts() {
    return this.cartsService.findAll();
  }

  @Get(':id')
  getCartById(@Param('id') id: string) {
    const numberId = parseInt(id, 10);
    if (isNaN(numberId)) {
      return { message: 'Invalid cart ID' };
    }
    const cart = this.cartsService.findById(numberId);

    return cart ? cart : { message: 'Cart not found' };
  }
}
