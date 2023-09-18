export const errorSchema = {
  type: 'object',
  properties: {
    statusCode: {
      type: 'number'
    },
    message: {
      type: 'string'
    }
  },
  required: ['statusCode', 'message']
};
