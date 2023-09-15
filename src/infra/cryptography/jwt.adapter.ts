import { Encrypt, Decrypt } from '@/domain/contracts';

import jwt from 'jsonwebtoken';

export class JwtAdapter implements Encrypt, Decrypt {
  constructor() {}
  async encrypt(
    payload: string | object,
    secretOrPrivateKey: any,
    options?: object
  ): Promise<string> {
    return jwt.sign(payload, secretOrPrivateKey, options);
  }
  async decrypt(token: string, secretOrPrivateKey: string): Promise<any> {
    return jwt.verify(token, secretOrPrivateKey);
  }
}
