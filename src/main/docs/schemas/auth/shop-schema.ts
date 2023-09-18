export const shopSchema = {
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
        name: {
          type: 'string'
        },
        email: {
          type: 'string'
        },
        password: {
          type: 'string'
        },
        status: {
          type: 'string'
        },
        verify: {
          type: 'boolean'
        },
        roles: {
          type: 'array'
        },
        accessToken: {
          type: 'string'
        },
        refreshToken: {
          type: 'string'
        }
      },
      required: [
        'id',
        'name',
        'email',
        'password',
        'status',
        'verify',
        'roles',
        'accessToken',
        'refreshToken'
      ]
    }
  },
  required: ['statusCode', 'message', 'data']
};
