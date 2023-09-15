import { KeyToken } from '@/domain/entities';

export interface KeyTokenRepository {
  createKeyToken: (
    input: KeyTokenRepository.Params
  ) => Promise<KeyTokenRepository.Result>;
  findByUserId: (
    userId: string
  ) => Promise<KeyTokenRepository.ResultFindByUserId>;
  removeKeyById: (id?: string) => Promise<any>;
  findByRefreshToken: (
    refreshToken: string
  ) => Promise<KeyTokenRepository.ResultFindByRefreshToken>;
  findByRefreshTokensUsed: (
    refreshToken: string
  ) => Promise<KeyTokenRepository.ResultFindByRefreshTokensUsed>;
  deletedKeyById: (id: string) => Promise<any>;
}
export namespace KeyTokenRepository {
  export type Params = Pick<
    KeyToken,
    'userId' | 'publicKey' | 'privateKey' | 'refreshToken'
  >;
  export type Result = string | null | Error;
  export type ResultFindByUserId = KeyToken;
  export type ResultFindByRefreshToken = KeyToken;
  export type ResultFindByRefreshTokensUsed = KeyToken;
}
