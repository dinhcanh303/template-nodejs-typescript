export const findApiKeyParamsSchema = {
  type: 'object',
  properties: {
    key: {
      type: 'string'
    }
  },
  required: ['key']
};
