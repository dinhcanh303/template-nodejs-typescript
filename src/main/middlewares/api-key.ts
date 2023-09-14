import { adaptMiddleware } from '@/main/adapters';
import { makeApiKeyMiddleware } from '@/main/factories';

export const apiKey = adaptMiddleware(makeApiKeyMiddleware());
