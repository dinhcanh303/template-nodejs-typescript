import { Encrypt, Decrypt } from '@/domain/contracts';

import jwt from 'jsonwebtoken';

export class JwtAdapter implements Encrypt, Decrypt {
  constructor(private readonly secret?: string) {}

  async encrypt(
    payload: string | object,
    secretOrPrivateKey: string
  ): Promise<string> {
    return jwt.sign(payload, secretOrPrivateKey ?? this.secret ?? '');
  }
  async decrypt(token: string, secretOrPrivateKey: string): Promise<string> {
    return jwt.verify(token, secretOrPrivateKey ?? this.secret ?? '') as any;
  }
}
