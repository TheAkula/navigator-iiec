import { applyDecorators, SetMetadata } from '@nestjs/common';
import { FileAccessRight } from 'src/shared/types';
import { Reflect } from 'src/utils/reflect';

export const HaveAccess =
    (action: FileAccessRight) => (target: any, propertyName: string) => 
    Reflect.defineMetadata('file:access', propertyName, target, action);
