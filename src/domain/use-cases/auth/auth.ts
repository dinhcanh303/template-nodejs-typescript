import { KeyToken, Shop } from '@/domain/entities';

export interface AuthenticationUseCase {
  login: (
    email: string,
    password: string
  ) => Promise<AuthenticationUseCase.Result>;
  signup: (
    input: AuthenticationUseCase.Params
  ) => Promise<AuthenticationUseCase.Result>;
  logout: (keyStore: KeyToken) => Promise<boolean>;
  handleRefreshToken: (
    input: AuthenticationUseCase.ParamsHandleRT
  ) => Promise<AuthenticationUseCase.ResultHandleRT>;
}
export namespace AuthenticationUseCase {
  export type Params = Omit<Shop, 'id'>;
  export type Result = {
    shop: Pick<Shop, 'id' | 'name' | 'email'>;
    accessToken: string | undefined;
    refreshToken: string | undefined;
  } | null;
  export type ParamsHandleRT = {
    refreshToken: string;
    userId: string;
    email: string;
    keyStore: KeyToken;
  };
  export type ResultHandleRT = {
    shop: Pick<Shop, 'id' | 'name' | 'email'>;
    accessToken: string | undefined;
    refreshToken: string | undefined;
  } | null;
}
