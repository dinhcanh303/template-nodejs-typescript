import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  key!: string;
  @Column({ default: false })
  status?: boolean;
  @Column({ default: [] })
  permissions!: Array<string>;
}
