import { Controller } from '@/application/controllers';
import { SignupController } from '@/application/controllers/auth';
import { makeAuth } from '@/main/factories/use-cases';

export const makeSignupController = (): Controller => {
  return new SignupController(makeAuth());
};
