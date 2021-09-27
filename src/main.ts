import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:TmB52Q1lVFWE@34.205.191.150:5672/smartranking'],
      noAck: false,
      queue: 'admin-backend',
    },
  });

  await app.listen();
}
bootstrap();
