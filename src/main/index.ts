import './config/module-alias';
import { env } from '@/main/config/env';
import { DatabaseConnection } from '@/infra/db';

import 'reflect-metadata';

DatabaseConnection.connectDatabase('typeorm')
  .then(async () => {
    const { app } = await import('@/main/config/app');
    app.listen(env.port, () =>
      console.log(`Server running at http://localhost:${env.port}`)
    );
  })
  .catch(console.error);
