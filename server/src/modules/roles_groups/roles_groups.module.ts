import { Module } from '@nestjs/common';
import { RolesGroupsService } from './roles_groups.service';

@Module({
  providers: [RolesGroupsService],
})
export class RolesGroupsModule {}
