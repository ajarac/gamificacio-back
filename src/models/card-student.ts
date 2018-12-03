import { Card } from './card';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class CardStudent {
	@PrimaryGeneratedColumn('increment') public id: number;

	@OneToOne(() => Card, (card) => card.id)
	@JoinColumn()
	public cardId: number;
}
