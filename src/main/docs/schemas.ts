import {
  loginParamsSchema,
  errorSchema,
  signUpParamsSchema,
  createApiKeyParamsSchema,
  findApiKeyParamsSchema,
  shopSchema,
  apiKeySchema
} from './schemas/';

export default {
  error: errorSchema,
  createApiKeyParams: createApiKeyParamsSchema,
  findApiKeyParams: findApiKeyParamsSchema,
  apiKey: apiKeySchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  shop: shopSchema
};
