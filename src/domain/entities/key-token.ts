export type KeyToken = {
  id?: string;
  userId: string;
  publicKey: string;
  privateKey: string;
  refreshToken?: string;
  refreshTokenUsed?: string;
  createAt?: Date;
  updatedAt?: Date;
};
