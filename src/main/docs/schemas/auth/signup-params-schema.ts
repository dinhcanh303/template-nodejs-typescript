export const signUpParamsSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    passwordConfirm: {
      type: 'string'
    }
  },
  required: ['name', 'email', 'password', 'passwordConfirm']
};
