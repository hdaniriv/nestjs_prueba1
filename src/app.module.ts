import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';
import { PublicModule } from './public/public.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [HomeModule, PublicModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
