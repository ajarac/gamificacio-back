import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BadgeStudent {
  @PrimaryGeneratedColumn('increment') public id: number;
  
  @Column('int') public badgeId: number;

  @Column('int') public studentId: number;
}
