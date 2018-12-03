import { CollectionCard } from './collection-card';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from "typeorm";

@Entity()
export class CollectionCardStudent {
  @PrimaryGeneratedColumn('increment') public id: number;

  @OneToOne(() => CollectionCard, (collectionCard) => collectionCard.id)
  @JoinColumn()
  public collectionCardId: number;

  @Column('int') public studentId: number;
} 