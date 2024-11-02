import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  occurredOn: Date;

  @Column({ nullable: false })
  reviewId: string;

  @Column()
  type: string;

  @Column('jsonb')
  data: any;
}