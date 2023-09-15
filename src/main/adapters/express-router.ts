import { Controller } from '@/application/controllers';

import { NextFunction, Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request | any, res: Response, next: NextFunction) => {
    const request = {
      ...(req.headers || {}),
      ...(req.body || {}),
      ...(req.params || {}),
      ...(req.locals || {}),
      keyStore: req?.keyStore,
      user: req?.user,
      refreshToken: req?.refreshToken
    };
    try {
      const httpResponse = await controller.handle(request);
      if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
        res.status(httpResponse.statusCode).json(httpResponse);
      } else {
        res.status(httpResponse.statusCode).json(httpResponse);
      }
    } catch (error) {
      next(error);
    }
  };
};
