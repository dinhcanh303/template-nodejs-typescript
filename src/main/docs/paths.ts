import {
  createApiKeyPath,
  findApiKeyPath,
  loginPath,
  signUpPath
} from './paths/';

export default {
  '/api-keys': createApiKeyPath,
  '/api-keys/{key}': findApiKeyPath,
  '/login': loginPath,
  '/signup': signUpPath
};
