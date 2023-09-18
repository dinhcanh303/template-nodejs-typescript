import paths from './paths';
import components from './components';
import schemas from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: 'API - Test E-commerce Service using clean architectures',
    description: 'clean architectures api ^^!',
    version: '1.0.0',
    contact: {
      name: 'Foden Ngo',
      email: 'dinhcanh303@gmail.com',
      url: 'https://www.linkedin.com/in/ngo-dinh-canh-588839220/'
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
    }
  },
  externalDocs: {
    description: 'Link template project Nodejs',
    url: 'https://github.com/ngodinhcanh/template-nodejs-typescript'
  },
  servers: [
    {
      url: '/api',
      description: 'E-commerce API'
    }
  ],
  tags: [
    {
      name: 'ApiKey',
      description: 'APIs create api key'
    },
    {
      name: 'Authentication',
      description: 'APIs authentication'
    }
  ],
  paths,
  schemas,
  components
};
