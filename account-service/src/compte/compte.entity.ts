import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Compte {
 @PrimaryGeneratedColumn()
 id: number;
 @Column()
 nom: string;
 @Column('decimal', { precision: 10, scale: 2, default: 0 })
 solde: number;
}
