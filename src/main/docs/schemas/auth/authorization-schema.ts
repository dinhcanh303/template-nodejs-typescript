export const authorizationSchema = {
  type: 'apiKey',
  in: 'header',
  name: 'Authorization'
};
export const clientIdSchema = {
  type: 'apiKey',
  in: 'header',
  name: 'ClientId'
};
