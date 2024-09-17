import { Module } from '@nestjs/common';
import { PublicController } from './controlers/public.controller';
import { PublicService } from './services/public.service';

@Module({
  controllers: [PublicController],
  providers: [PublicService]
})
export class PublicModule {}
