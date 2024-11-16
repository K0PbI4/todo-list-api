import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {    //Запуск приложения
  const app = await NestFactory.create(AppModule);            //Создание экземпляра приложения
  const config = new DocumentBuilder()                        //Создание конфигурации для swagger
    .setTitle('TodoList API')
    .setDescription('The TodoList API description')
    .build();
  const document = SwaggerModule.createDocument(app, config); //Генерация swagger документа
  SwaggerModule.setup('api', app, document);                  //и подключение его по маршруту /api

  await app.listen(3000)                                      //Запуск приложения на порту 3000
}
bootstrap()