import { IConnectDb } from './contracts/IConnectDb';

export class Singleton {
  private static instance?: Singleton;
  protected constructor() {}
  static getInstance<T extends typeof Singleton>(this: T): T['prototype'] {
    if (!Singleton.instance) {
      Singleton.instance = new (this as T)();
    }
    return Singleton.instance;
  }
}
