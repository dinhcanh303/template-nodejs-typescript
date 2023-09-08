export interface Decrypt {
  decrypt: (hypertext: string) => Promise<string>;
}
