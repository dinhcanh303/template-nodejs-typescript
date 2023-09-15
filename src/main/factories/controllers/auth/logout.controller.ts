import { LogoutController } from '@/application/controllers/auth';
import { makeAuth } from '../../use-cases';
import { Controller } from '@/application/controllers';

export const makeLogoutController = (): Controller => {
  return new LogoutController(makeAuth());
};
