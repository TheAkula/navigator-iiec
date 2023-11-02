import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RolesGroupEntity } from '../roles_groups/roles_group.entity';

@Entity('path_permissions')
export class PathPermissionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  path: string;

  @ManyToOne(() => RolesGroupEntity, { nullable: true })
  @JoinColumn()
  writeGroup: RolesGroupEntity | null;

  @ManyToOne(() => RolesGroupEntity, { nullable: true })
  @JoinColumn()
  readGroup: RolesGroupEntity | null;
}
