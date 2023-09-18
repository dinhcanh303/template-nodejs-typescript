import {
  apiKeyAuthSchema,
  authorizationSchema,
  clientIdSchema
} from './schemas/';
import {
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden
} from './components/';

export default {
  securitySchemes: {
    ApiKey: apiKeyAuthSchema
    // Authorization: authorizationSchema,
    // ClientId: clientIdSchema
  },
  badRequest,
  serverError,
  unauthorized,
  notFound,
  forbidden
};
