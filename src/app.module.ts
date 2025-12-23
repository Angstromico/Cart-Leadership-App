import { Module } from '@nestjs/common';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [CartsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
