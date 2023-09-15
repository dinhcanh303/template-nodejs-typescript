import { KeyToken } from '@/domain/entities';

export interface KeyTokenUseCase {
  createKeyToken: (
    input: KeyTokenUseCase.Params
  ) => Promise<KeyTokenUseCase.Result>;
  findByUserId: (userId: string) => Promise<KeyTokenUseCase.ResultFindByUserId>;
  removeKeyById: (id: string) => Promise<any>;
  findByRefreshToken: (
    refreshToken: string
  ) => Promise<KeyTokenUseCase.ResultFindByRefreshToken>;
  findByRefreshTokensUsed: (
    refreshToken: string
  ) => Promise<KeyTokenUseCase.ResultFindByRefreshTokensUsed>;
  deletedKeyById: (id: string) => Promise<any>;
}
export namespace KeyTokenUseCase {
  export type Params = Pick<
    KeyToken,
    'userId' | 'publicKey' | 'privateKey' | 'refreshToken'
  >;
  export type Result = string | null | Error;
  export type ResultFindByUserId = KeyToken;
  export type ResultFindByRefreshToken = KeyToken;
  export type ResultFindByRefreshTokensUsed = KeyToken;
}
