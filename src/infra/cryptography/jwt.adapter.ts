import { Encrypt, Decrypt } from '@/domain/use-cases';

import jwt from 'jsonwebtoken';

export class JwtAdapter implements Encrypt, Decrypt {
  constructor(private readonly secret: string) {}

  async encrypt(plaintext: string): Promise<string> {
    return jwt.sign({ id: plaintext }, this.secret);
  }

  async decrypt(hypertext: string): Promise<string> {
    return jwt.verify(hypertext, this.secret) as any;
  }
}
