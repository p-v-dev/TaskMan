import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna o módulo disponível em toda a aplicação
      envFilePath: '.env', // Caminho opcional (padrão é a raiz)
    }),
    TasksModule,
    TypeOrmModule.forRoot({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  synchronize: true,
  ssl: { rejectUnauthorized: false },
  retryAttempts: 10,       // tenta 10 vezes
  retryDelay: 3000,        // espera 3s entre tentativas
}),
    AuthModule,
  ],
})
export class AppModule { }
