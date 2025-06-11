import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compte } from './compte.entity';
@Injectable()
export class CompteService {
 constructor(
 @InjectRepository(Compte)
 private compteRepo: Repository<Compte>,
 ) {}
 findOne(id: number) {
 return this.compteRepo.findOne({ where: { id } });
 }
 async debiter(id: number, montant: number) {
 const compte = await this.compteRepo.findOne({ where: { id } });
 if (!compte) throw new NotFoundException('Compte non trouvé');
 if (compte.solde < montant) {
 throw new Error('Solde insuffisant');
 }
 compte.solde -= montant;
 return this.compteRepo.save(compte);
 }
}