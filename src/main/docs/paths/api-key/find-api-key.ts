export const findApiKeyPath = {
  get: {
    tags: ['ApiKey'],
    summary: 'API',
    description: 'Find api key collection by key',
    parameters: [
      {
        in: 'path',
        name: 'key',
        description: 'Api key app provider',
        required: true,
        schema: {
          type: 'string'
        }
      }
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/apiKey'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      401: {
        $ref: '#/components/unauthorized'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
};
