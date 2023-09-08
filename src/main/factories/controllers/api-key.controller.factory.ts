import { ApiKeyController, Controller } from '@/application/controllers';
import { makeDbApiKey } from '../use-cases';

export const makeApiKeyController = (): Controller => {
  return new ApiKeyController(makeDbApiKey());
};
