import { PostgresConnection } from '@/infra/db/postgres';
import { MysqlConnection } from '@/infra/db/mysql';
import { MongodbConnection } from '@/infra/db/mongodb';
import { TypeormConnection } from '@/infra/db/typeorm';
import { Singleton } from './database.singleton';

interface DatabaseRegistry {
  [key: string]: Singleton | any; // Assuming Singleton is the base class for your database connection classes
}
class DatabaseConnection {
  static databaseRegistry: DatabaseRegistry = {};
  static registerDatabaseType(type: string, classRef: Singleton) {
    DatabaseConnection.databaseRegistry[type] = classRef;
  }
  static async connectDatabase(type: string) {
    const databaseClass = DatabaseConnection.databaseRegistry[type];
    if (!databaseClass) throw new Error();
    return await databaseClass.getInstance().connect();
  }
}
//Register
DatabaseConnection.registerDatabaseType('typeorm', TypeormConnection);
DatabaseConnection.registerDatabaseType('mysql', MysqlConnection);
DatabaseConnection.registerDatabaseType('postgres', PostgresConnection);
DatabaseConnection.registerDatabaseType('mongodb', MongodbConnection);

export { DatabaseConnection };
