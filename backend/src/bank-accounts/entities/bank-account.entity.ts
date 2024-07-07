import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'bank_accounts' })
export class BankAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  accountNumber: string;

  @Column()
  ownerName: string;

  @Column({ default: 0 })
  balance: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
