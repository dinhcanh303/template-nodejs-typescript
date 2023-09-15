import { Middleware } from '@/application/middlewares';

import { Request, Response, NextFunction } from 'express';

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request | any, res: Response, next: NextFunction) => {
    const request = {
      apiKey: req.headers?.['x-api-key'],
      authorization: req.headers?.['authorization'],
      refreshToken: req.headers?.['refresh-token'],
      clientId: req.headers?.['x-client-id'],
      objKey: req?.objKey,
      ...(req.headers || {})
    };
    try {
      const httpResponse = await middleware.handle(request);
      if (httpResponse.statusCode === 200) {
        Object.assign(req, httpResponse.data);
        next();
      } else {
        res.status(httpResponse.statusCode).json({
          error: httpResponse.data.message
        });
      }
    } catch (error) {
      next(error);
    }
  };
};
