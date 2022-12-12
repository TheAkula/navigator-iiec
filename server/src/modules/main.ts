import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'http://localhost:3000',
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  // app.use(
  //   json({
  //     limit: '100mb',
  //   }),
  // );
  await app.listen(3001);
}
bootstrap();
