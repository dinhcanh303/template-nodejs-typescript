import { adaptRoute as adapt } from '@/main/adapters';
import { Router } from 'express';
import {
  makeHandleRefreshToken,
  makeLoginController,
  makeLogoutController,
  makeSignupController
} from '@/main/factories';
import { auth } from '../middlewares';

export default (router: Router): void => {
  // router.use(auth);
  // router.get('/products', adapt(makeLoginController()));
  // router.get('/products/drafts', adapt(makeLoginController()));
  // router.get('/products/published', adapt(makeLoginController()));
  router.post('/products', adapt(makeSignupController()));
  // router.post('/products/:id/publish', adapt(makeSignupController()));
  // router.post('/products/:id/unpublish', adapt(makeSignupController()));
  // router.get('/products/search', adapt(makeSignupController()));
  // router.get('/products/:id', adapt(makeHandleRefreshToken()));
  // router.put('/products/:id', adapt(makeLogoutController()));
  // router.delete('/products/:id', adapt(makeLogoutController()));
};
