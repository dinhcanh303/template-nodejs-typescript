export interface Decrypt {
  decrypt: (token: string, secretOrPrivateKey: string) => Promise<any>;
}
