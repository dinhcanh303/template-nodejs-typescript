import { Controller, CreateApiKeyController } from '@/application/controllers';
import { makeDbCreateApiKey } from '../../use-cases';

export const makeCreateApiKeyController = (): Controller => {
  return new CreateApiKeyController(makeDbCreateApiKey());
};
