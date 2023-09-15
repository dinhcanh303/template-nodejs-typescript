import { Controller } from '@/application/controllers';
import { HandleRefreshTokenController } from '@/application/controllers/auth';
import { makeAuth } from '../../use-cases';

export const makeHandleRefreshToken = (): Controller => {
  return new HandleRefreshTokenController(makeAuth());
};
