import { Crypto } from '@/domain/contracts';
import crypto from 'crypto';

export class CryptoAdapter implements Crypto {
  async create(): Promise<any> {
    return crypto.randomBytes(64).toString('hex');
  }
}
