import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import type { OptionalCart } from './interfaces/car.interface';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get()
  getCarts() {
    return this.cartsService.findAll();
  }

  @Get(':id')
  getCartById(@Param('id', ParseUUIDPipe) id: string) {
    const cart = this.cartsService.findById(id);

    if (!cart) {
      throw new NotFoundException(`Cart with id ${id} not found`);
    }

    return cart;
  }

  @Post()
  createCart(@Body() body: OptionalCart) {
    console.log(body);

    this.cartsService.create(body);

    return { message: 'Cart created successfully' };
  }

  @Patch(':id')
  updateCart(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: OptionalCart,
  ) {
    this.cartsService.update(id, body);

    return { message: 'Cart updated successfully' };
  }

  @Delete(':id')
  deleteCart(@Param('id', ParseUUIDPipe) id: string) {
    this.cartsService.delete(id);

    return { message: 'Cart deleted successfully' };
  }
}
