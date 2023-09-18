import { setupMiddlewares } from '@/main/config/middlewares';
import { setupRoutes } from '@/main/config/routes';
import express from 'express';
import setupSwagger from '@/main/config/swagger';
import { setupAsyncHandle } from './async-handle';

const app = express();
setupSwagger(app);
setupMiddlewares(app);
setupRoutes(app);
setupAsyncHandle(app);
export { app };
