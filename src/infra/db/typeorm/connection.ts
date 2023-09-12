import { DataSource } from 'typeorm';
import { env } from '@/main/config/env';
import { Singleton } from '../database.singleton';
import { ApiKey } from './entities/api-key';

export class TypeormConnection extends Singleton {
  connect() {
    const db = env.db ?? undefined;
    if (!db) return new Error();
    console.log(db);
    const dataSource = new DataSource({
      type: db.connection as any,
      host: db.host,
      port: +db.port,
      username: db.username,
      password: db.password,
      database: db.database,
      synchronize: true,
      logging: true,
      // entities: ['entities/*.ts']
      entities: [ApiKey],
      // subscribers: [],
      migrations: []
    });
    return dataSource;
  }
}
