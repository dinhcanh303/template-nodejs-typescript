import { Router, Express } from 'express';
import { readdirSync } from 'fs';
import { join } from 'path';
import { apiKey } from '@/main/middlewares';

export const setupRoutes = (app: Express): void => {
  const router = Router();
  readdirSync(join(__dirname, '../routes'))
    .filter((file) => !file.endsWith('.map'))
    .map(async (file) => {
      (await import(`../routes/${file}`)).default(router);
    });
  app.use(apiKey);
  app.use('/api', router);
};
