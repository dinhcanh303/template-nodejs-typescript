export interface Verify {
  verify: (token: string, secretOrPrivateKey: string) => Promise<void>;
}
