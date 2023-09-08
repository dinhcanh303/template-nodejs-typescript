import { adaptExpressRoute as adapt } from '@/main/adapters';
import { Router } from 'express';
import { makeApiKeyController } from '@/main/factories';

export default (router: Router): void => {
  router.get('/createApiKey', adapt(makeApiKeyController()));
};
