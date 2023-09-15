import { setupMiddlewares } from '@/main/config/middlewares';
import { setupRoutes } from '@/main/config/routes';
import express from 'express';
import { setupAsyncHandle } from './async-handle';

const app = express();
setupMiddlewares(app);
setupRoutes(app);
setupAsyncHandle(app);
export { app };
