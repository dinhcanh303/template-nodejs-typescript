import { Singleton } from '../database.singleton';
import mongoose from 'mongoose';
import { env } from '@/main/config/env';

const { db } = env;
const connectString = `mongodb://${db.host}:${db.port}/${db.database}`;
export class MongodbConnection extends Singleton {
  connect() {
    if (process.env.APP_ENV === 'dev') {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }
    mongoose
      .connect(connectString, { maxPoolSize: 50 })
      .then((_) => console.log(`Connect Mongodb Success`))
      .catch((err) => console.log(`Error Connect ${err}`));
  }
}
