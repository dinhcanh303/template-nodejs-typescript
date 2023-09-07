import { DataSource } from 'typeorm';
import { env } from '@/main/config/env';
import { Singleton } from '../database.singleton';

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
      entities: ['entities/*.ts']
      // subscribers: [],
      // migrations: []
    });
    return dataSource;
  }
  private matchType(type: string) {
    switch (type) {
      case 'mysql':
        return type as 'mysql';
      case 'mariadb':
        return type as 'mariadb';
      case 'postgres':
        return type as 'postgres';
      case 'cockroachdb':
        return type as 'cockroachdb';
      case 'sqlite':
        return type as 'sqlite';
      case 'mssql':
        return type as 'mssql';
      case 'sap':
        return type as 'sap';
      case 'oracle':
        return type as 'oracle';
      case 'cordova':
        return type as 'cordova';
      case 'nativescript':
        return type as 'nativescript';
      case 'react-native':
        return type as 'react-native';
      case 'sqljs':
        return type as 'sqljs';
      case 'mongodb':
        return type as 'mongodb';
      case 'aurora-mysql':
        return type as 'aurora-mysql';
      case 'aurora-postgres':
        return type as 'aurora-postgres';
      case 'better-sqlite3':
        return type as 'better-sqlite3';
      case 'capacitor':
        return type as 'capacitor';
      case 'spanner':
        return type as 'spanner';
      case 'expo':
        return type as 'expo';
      default:
        return null;
    }
  }
}
