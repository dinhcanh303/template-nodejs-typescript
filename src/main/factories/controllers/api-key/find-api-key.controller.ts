import { Controller, FindApiKeyController } from '@/application/controllers';
import { makeDbCreateApiKey } from '../../use-cases';

export const makeFindApiKeyController = (): Controller => {
  return new FindApiKeyController(makeDbCreateApiKey());
};
