import { FileAccessRight } from 'src/shared/types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_permissions')
export class UserPermissionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  role: string;

  @Column({
    type: 'simple-json',
  })
  permissions: FileAccessRight[];
}
