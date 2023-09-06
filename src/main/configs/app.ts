import express from 'express';
import { setupMiddlewares } from '@/main/configs/middleware';
import { setupRoutes } from '@/main/configs/routes';

const app = express();
setupMiddlewares(app);
setupRoutes(app);
export { app };
