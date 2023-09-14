import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class KeyToken {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  userId!: string;
  @Column()
  publicKey!: string;
  @Column()
  privateKey!: string;
  @Column({ default: null })
  refreshToken?: boolean;
  @Column({ default: [] })
  refreshTokenUsed?: Array<string>;
}
