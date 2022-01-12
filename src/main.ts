import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Desafio - Wa Project.')
    .setDescription(
      'Construir uma API para manutenção de laboratórios e exames.',
    )
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  app.listen(process.env.PORT || 3000, () => {
    console.log('🏃 Running Server');
  });
}
bootstrap();
