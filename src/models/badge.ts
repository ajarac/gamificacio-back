import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Badge {
	@PrimaryGeneratedColumn('increment') public id: number;

	@Column('varchar', { length: 512 })
	public name: string;

  @Column('longtext') public image: string;
  
  @Column('int') public value: number;

  @Column('int') public schoolId: number;

  @Column('int') public teacherId: number;
}
