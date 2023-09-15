import { Controller } from '@/application/controllers';
import { LoginController } from '@/application/controllers/auth';
import { makeAuth } from '@/main/factories/use-cases';

export const makeLoginController = (): Controller => {
  return new LoginController(makeAuth());
};
