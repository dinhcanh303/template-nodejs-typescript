import { Encrypt, Decrypt } from '@/domain/contracts';

import jwt from 'jsonwebtoken';

export class JwtAdapter implements Encrypt, Decrypt {
  constructor(private readonly secret: string) {}

  async encrypt(payload: string | object): Promise<string> {
    return jwt.sign(payload, this.secret);
  }

  async decrypt(hypertext: string): Promise<string> {
    return jwt.verify(hypertext, this.secret) as any;
  }
}
