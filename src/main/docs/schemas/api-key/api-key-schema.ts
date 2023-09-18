export const apiKeySchema = {
  type: 'object',
  properties: {
    statusCode: {
      type: 'number'
    },
    message: {
      type: 'string'
    },
    data: {
      type: 'object',
      properties: {
        id: {
          type: 'string'
        },
        key: {
          type: 'string'
        },
        status: {
          type: 'boolean'
        },
        permissions: {
          type: 'array'
        }
      },
      required: ['id', 'key', 'status', 'permissions']
    }
  },
  required: ['statusCode', 'message', 'data']
};
