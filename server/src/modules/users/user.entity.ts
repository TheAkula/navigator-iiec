import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolesGroupEntity } from '../roles_groups/roles_group.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  login: string;

  @Column()
  password: string;

  @ManyToMany(() => RolesGroupEntity, (group) => group.roles, { eager: true })
  groups: RolesGroupEntity[];
}
