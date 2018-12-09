import { Card } from './card';
import { Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, BaseEntity } from 'typeorm';

@Entity()
export class CardStudent extends BaseEntity {
	@PrimaryGeneratedColumn('increment') public id: number;
	
	@OneToOne(() => Card)
	@JoinColumn()
	public cardId: number;
}
