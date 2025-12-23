import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CartsService } from './carts.service';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get()
  getCarts() {
    return this.cartsService.findAll();
  }

  @Get(':id')
  getCartById(@Param('id', ParseIntPipe) id: number) {
    const cart = this.cartsService.findById(id);

    return cart ? cart : { message: 'Cart not found' };
  }
}
