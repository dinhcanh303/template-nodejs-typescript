import { Controller } from '@/application/controllers';
import { LoginController } from '@/application/controllers/auth';
import { CreateProductController } from '@/application/controllers/product';
import { makeAuth } from '@/main/factories/use-cases';

export const makeLoginController = (): Controller => {
  return new CreateProductController(makeAuth());
};
