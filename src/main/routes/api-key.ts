import { adaptRoute as adapt } from '@/main/adapters';
import { Router } from 'express';
import {
  makeCreateApiKeyController,
  makeFindApiKeyController
} from '@/main/factories';

export default (router: Router): void => {
  router.get('/getApiKey', adapt(makeFindApiKeyController()));
  router.post('/createApiKey', adapt(makeCreateApiKeyController()));
};
