import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //!coonfiguramos para que todas las rutas puedan validar los dtos
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
  }));
  await app.listen(3000);
}
bootstrap();
