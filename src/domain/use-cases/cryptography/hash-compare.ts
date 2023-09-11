export interface HashCompare {
  compare: (plaintext: string, digest: string) => Promise<boolean>;
}
