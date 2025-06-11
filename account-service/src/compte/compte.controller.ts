import { Controller, Get, Param, Patch, Body } from '@nestjs/common';
import { CompteService } from './compte.service';

@Controller('comptes')
export class CompteController {
 constructor(private readonly service: CompteService) {}
 @Get(':id')
 findOne(@Param('id') id: number) {
 return this.service.findOne(+id);
 }
 @Patch(':id/debiter')
 debiter(@Param('id') id: number, @Body('montant') montant: number) {
 return this.service.debiter(+id, +montant);
 }
}