export interface Encrypt {
  encrypt: (plaintext: string) => Promise<string>;
}
