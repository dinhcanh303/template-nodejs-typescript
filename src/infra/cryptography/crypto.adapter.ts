import { Crypto } from '@/domain/use-cases';
import crypto from 'crypto';

export class CryptoAdapter implements Crypto {
  async create(): Promise<string> {
    return crypto.randomBytes(64).toString('hex');
  }
}
