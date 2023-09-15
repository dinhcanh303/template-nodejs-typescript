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
  router.post('/shop/login/', adapt(makeLoginController()));
  router.post('/shop/signup', adapt(makeSignupController()));
  router.use(auth);
  router.post('/shop/handle-refresh-token', adapt(makeHandleRefreshToken()));
  router.post('/shop/logout', adapt(makeLogoutController()));
};
