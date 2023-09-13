export interface Encrypt {
  encrypt: (
    payload: string | object,
    secretOrPrivateKey: string
  ) => Promise<string>;
}
