import { KeyToken } from '@/domain/entities';

export interface KeyTokenRepository {
  createKeyToken: (
    input: KeyTokenRepository.Params
  ) => Promise<KeyTokenRepository.Result>;
  findByUserId: (
    userId: string
  ) => Promise<KeyTokenRepository.ResultFindByUserId>;
  removeKeyById: (id?: string) => Promise<boolean>;
  findByRefreshToken: (
    refreshToken: string
  ) => Promise<KeyTokenRepository.ResultFindByRefreshToken>;
  findByRefreshTokenUsed: (
    refreshToken: string
  ) => Promise<KeyTokenRepository.ResultFindByRefreshTokenUsed>;
  deletedKeyById: (id: string) => Promise<boolean>;
}
export namespace KeyTokenRepository {
  export type Params = Pick<
    KeyToken,
    'userId' | 'publicKey' | 'privateKey' | 'refreshToken'
  >;
  export type Result = string | null | Error;
  export type ResultFindByUserId = KeyToken;
  export type ResultFindByRefreshToken = KeyToken;
  export type ResultFindByRefreshTokenUsed = KeyToken;
}