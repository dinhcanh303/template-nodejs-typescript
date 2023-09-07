import { Express, json, urlencoded } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
export const setupMiddlewares = (app: Express): void => {
  app.use(cors());
  app.use(morgan('dev'));
  app.use(compression());
  app.use(json());
  app.use(
    urlencoded({
      extended: true
    })
  );
};
