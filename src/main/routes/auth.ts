import { adaptRoute as adapt } from '@/main/adapters';
import { Router } from 'express';
import {
  makeCreateApiKeyController,
  makeFindApiKeyController
} from '@/main/factories';
import { auth } from '../middlewares';

export default (router: Router): void => {
  router.post('/shop/login/', adapt(makeFindApiKeyController()));
  router.post('/shop/signup', adapt(makeCreateApiKeyController()));
  router.use(auth);
};
