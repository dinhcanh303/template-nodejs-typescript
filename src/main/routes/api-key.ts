import { adaptRoute as adapt } from '@/main/adapters';
import { Router } from 'express';
import {
  makeCreateApiKeyController,
  makeFindApiKeyController
} from '@/main/factories';

export default (router: Router): void => {
  router.get('/api-keys/:key', adapt(makeFindApiKeyController()));
  router.post('/api-keys', adapt(makeCreateApiKeyController()));
};
