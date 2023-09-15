import {
  BadRequestError,
  ForbiddenError,
  ServerError,
  UnauthorizedError
} from '@/application/errors';
import ReasonPhrases from '../errors/reasonPhrases';
import StatusCodes from '../errors/statusCodes';

export type HttpResponse<T = any> = {
  statusCode: number;
  message: string;
  data?: T;
};

export const ok = <T = any>(data: T, message?: string): HttpResponse<T> => ({
  statusCode: StatusCodes.OK,
  message: message ?? ReasonPhrases.OK,
  data
});
export const created = <T = any>(
  data: T,
  message?: string
): HttpResponse<T> => ({
  statusCode: StatusCodes.CREATED,
  message: message ?? ReasonPhrases.CREATED,
  data
});

export const badRequest = (message?: string): HttpResponse<Error> => ({
  ...new BadRequestError(message)
});

export const unauthorized = (message?: string): HttpResponse<Error> => ({
  ...new UnauthorizedError(message)
});

export const forbidden = (message?: string): HttpResponse<Error> => ({
  ...new ForbiddenError(message)
});

export const serverError = (message?: string): HttpResponse<Error> => ({
  ...new ServerError(message)
});
