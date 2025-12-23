import { Controller, Get } from '@nestjs/common';

@Controller('carts')
export class CartsController {
  @Get()
  getCarts() {
    return { message: 'List of carts' };
  }
}
