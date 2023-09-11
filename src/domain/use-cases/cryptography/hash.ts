export interface Hash {
  hash: (plaintext: string) => Promise<string>;
}
