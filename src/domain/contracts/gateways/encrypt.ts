export interface Encrypt {
  encrypt: (
    payload: string | object,
    secretOrPrivateKey: any,
    options?: object
  ) => Promise<string>;
}
