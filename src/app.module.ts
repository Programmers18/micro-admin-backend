import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from './categorias/categorias.module';
import { JogadoresModule } from './jogadores/jogadores.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://raondup:rdwqjY5e6HBZzBAV@cluster0.3vglm.mongodb.net/sradmbackend',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    ConfigModule.forRoot({ isGlobal: true }),
    CategoriasModule,
    JogadoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
