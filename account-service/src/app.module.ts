import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compte } from './compte/compte.entity';
import { CompteService } from './compte/compte.service';
import { CompteController } from './compte/compte.controller';

@Module({
 imports: [
 TypeOrmModule.forRoot({
 type: 'postgres',
 host: 'localhost',
 port: 5432,
 username: 'postgres',
 password: 'postgres',
 database: 'banque',
 entities: [Compte],
 synchronize: true,
 }),
 TypeOrmModule.forFeature([Compte]),
 ],
 controllers: [CompteController],
 providers: [CompteService],
})
export class AppModule {}