import { ErrorResponse, NotFoundError } from '@/application/errors';
import { Express, NextFunction, Request, Response } from 'express';
export const setupAsyncHandle = (app: Express): void => {
  app.use((req, res, next) => {
    const err = new NotFoundError('Not Found', 404);
    next(err);
  });
  app.use(
    (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
      const statusCode = err.statusCode || 500;
      return res.status(statusCode).json({
        statusCode: statusCode,
        message: err.message || 'Internal Server Error'
      });
    }
  );
};
