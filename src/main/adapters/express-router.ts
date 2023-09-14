import { Controller } from '@/application/controllers';

import { RequestHandler } from 'express';

type Adapter = (controller: Controller) => RequestHandler;

export const adaptRoute: Adapter = (controller) => async (req, res) => {
  const { statusCode, data } = await controller.handle({
    ...req.params,
    ...req.body,
    ...req.locals
  });
  const json = Array(100)
    .fill(1)
    .map((_, index) => index + 200)
    .includes(statusCode)
    ? { statusCode, data }
    : { error: data.message };
  res.status(statusCode).json(json);
};
