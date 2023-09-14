import { ApiKeyMiddleware, Middleware } from '@/application/middlewares';
import { ApiKeyMongoDbRepository } from '@/infra/db/mongodb/repos';

export const makeApiKeyMiddleware = (): Middleware => {
  const apiKeyRepos = new ApiKeyMongoDbRepository();
  return new ApiKeyMiddleware(apiKeyRepos);
};
