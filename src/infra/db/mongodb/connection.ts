import { IConnectDb } from '../contracts/IConnectDb';
import { Singleton } from '../database.singleton';
import mongoose from 'mongoose';

export class MongodbConnection extends Singleton {
  connect() {
    if (process.env.APP_ENV === 'dev') {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }
    mongoose
      .connect('', { maxPoolSize: 50 })
      .then((_) => console.log(`Connect Mongodb Success`))
      .catch((err) => console.log(`Error Connect ${err}`));
  }
}
