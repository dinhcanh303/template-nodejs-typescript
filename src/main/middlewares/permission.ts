import { adaptMiddleware } from '@/main/adapters';
import { makePermissionMiddleware } from '@/main/factories';

export const permission = adaptMiddleware(makePermissionMiddleware());
